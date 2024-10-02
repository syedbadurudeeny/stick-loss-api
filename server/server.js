const express= require("express");
const app = express()
const PORT = process.env.Port || 5001
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require("body-parser");
const connectDB = require("./Connection/dbConnection");


connectDB();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use("/api/user",require("./Routers/userRouter"));


app.listen(PORT,()=> {
    console.log(`Server Is Running In The Port of ${PORT}`);
})