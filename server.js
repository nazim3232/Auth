import  writer  from "./Author/author.js"
import app from "./src/app.js"
import DB from "./src/DB/db.connection.js"
console.log("The author of your server is : ", writer());
DB();
app.listen(3000, ()=>{
    console.log("Your app is running in the port number 3000")
})
