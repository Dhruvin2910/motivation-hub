const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 8000;

//Load environment variables form files
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Listining to Port ${PORT}`);
})

//for server testing
app.get("/test", (req, res) => {
    res.write("Welcome to Nodejs server");
    res.send();
})