import mongoose from "mongoose";

const connectDB =  async()=>{
    await mongoose.connect('mongodb+srv://vikashpandey7082:ZcCxTXlmdy3p4ina@cluster0.bbt9uwq.mongodb.net/')
    .then(() => {
        console.log('mongodb connected');
    })
    .catch(() => {
        console.log('failed to connect');
    })
};

export default connectDB; 