// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import router from './routes/userRoute.js';
import messageRoute from './routes/messageRoute.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config({})
const port = process.env.PORT || 8082;

const app = express();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser())
const corsOption = {
    origin:'http://localhost:5173',
    credentials:true
};
app.use(cors(corsOption));

//routes
app.use("/api/v1/user",router)
app.use("/api/v1/message",messageRoute)
// http://localhost:8081/api/v1/user/register
app.listen(port,()=>{
    connectDB();
    console.log(`port is  listening on ${port} `)
})