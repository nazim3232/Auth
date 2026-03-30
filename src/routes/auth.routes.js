import {Router} from "express"
import * as authController  from "../controllers/auth.controlles.js";

const authRouter = Router();
  
// this route will be call under the /api/auth/register
authRouter.post("/register", authController.register);
export default authRouter;