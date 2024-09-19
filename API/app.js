// const { Api } = require("@mui/icons-material");
const express = require("express");
const app = express();
const api = require("./routes/api");
const dotenv = require("dotenv");
const connectDb = require("./db/connectDB");
const fileUpload = require('express-fileupload');
const copkieParsar = require("cookie-parser");
const cookieParser = require("cookie-parser");

const cors=require('cors')
app.use(cors())
//token get
app.use(cookieParser());

// tempfiles uploader
app.use(fileUpload({useTempFiles : true}))

// for data get in api
app.use(express.json())

//route load
//localhost:4000/api/


app.use("/api", api);

// path define of dotenv
dotenv.config({
  path: ".env",
});

// conmect database
connectDb();



// server create
app.listen(process.env.port, () =>
  console.log(`localhost : ${process.env.PORT}`)
);
