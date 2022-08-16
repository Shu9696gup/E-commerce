const app = require("./app.js");
const dbConnect = require("./config/database")

const dotenv = require("dotenv");

//config
dotenv.config({path:"backend/config/config.env"})

//Connect DB
dbConnect();



app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})