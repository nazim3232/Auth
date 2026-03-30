import dotenv from "dotenv"
dotenv.config();
  if(!process.env.MONGO_URI)
  {
    throw new Error("database connection is not found.");
  }

if(!process.env.JWT_SECRET)
{
  throw new Error("The screat token not  found .");
}
const config = {
  MONGO_URI : process.env.MONGO_URI,
  PORT : process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET
}

export default config;
