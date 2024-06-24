import mongoose from "mongoose";

const connectDB =  async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/chatapplication')
    .then(() => {
        console.log('mongodb connected');
    })
    .catch(() => {
        console.log('failed to connect');
    })
};

export default connectDB;