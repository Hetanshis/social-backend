import express from "express";
import dotenv from 'dotenv';
dotenv.config()
const app = express()

app.use(express.json());

app.listen(`${process.env.PORT}`, () =>{
    console.log(`Sever is running on this PORT:-${process.env.PORT}`)
})