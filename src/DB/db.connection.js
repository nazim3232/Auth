import mongoose from "mongoose";
import config from "../config/config.js"


async function DB()
{
        try{
        await mongoose.connect(config.MONGO_URI);
        console.log("The database conncted successfully.");
        }catch(err)
        {
            console.log("Failed to connect with the database.");
        }
   
}

export default DB;
