import variable from "./model/variable.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import bodyParser from "body-parser"
import data from './data.js';


dotenv.config();

console.log(data[0].intensity)
mongoose.set("strictQuery", false);
mongoose.connect(process.env.CONNECTION_URL, () => {
    console.log("Connected to MongoDB");
});


variable.insertMany(data).then(function () {
    console.log("Data inserted")
}).catch(function (error) {
    console.log(error)
});