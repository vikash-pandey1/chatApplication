// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import router from './routes/userRoute.js';
import cookieParser from 'cookie-parser';

dotenv.config({})
const port = process.env.PORT || 8082;

const app = express();

//middleware

app.use(express.json());
app.use(cookieParser())

//routes
app.use("/api/v1/user",router)
// http://localhost:8081/api/v1/user/register
app.listen(port,()=>{
    connectDB();
    console.log(`port is  listening on ${port} `)
})