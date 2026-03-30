import userModel from "../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    const isAlreadyRegistered = await userModel.findOne({
      $or: [{ username }, { email }]
    });

    if (isAlreadyRegistered) {
      return res.status(409).json({
        message: "Username or email already exists."
      });
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword
    });

    const token = jwt.sign(
      { id: user._id },
      config.JWT_SECRET, 
      { expiresIn: "1d" }
    );

    res.status(201).json({
      message: "User created successfully.",
      user: {
        username: user.username,
        email: user.email
      },
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}



export async function getMe(req, res) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "TOKEN NOT FOUND"
      });
    }

    
    const decoded = jwt.verify(token, config.JWT_SECRET);

    
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(404).json({
        message: "USER NOT FOUND"
      });
    }

    res.status(200).json({
      user: {
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    res.status(500).json({
      message: "SERVER ERROR",
      error: err.message
    });
  }
}


