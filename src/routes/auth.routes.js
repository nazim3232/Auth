import {Router} from "express"
import * as authController  from "../controllers/auth.controlles.js";
import user from "../controllers/userDetails.js"

const authRouter = Router();
  
// this route will be call under the /api/auth/register
authRouter.post("/register", authController.register);
authRouter.get("/profile", user);
authRouter.get("/get-me", authController.getMe);
export default authRouter;