import  writer  from "./Author/author.js"
import app from "./src/app.js"
import DB from "./src/DB/db.connection.js"
import config from "./src/config/config.js"
console.log("The author of your server is : ", writer());
DB();
const port = config.PORT | 5000;
app.listen(port, ()=>{
    console.log("Your app is running in the port number:", port);
})
