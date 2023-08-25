import mongoose from "mongoose"

const connectDB = async () =>{
    try{
        if (mongoose.connection.readyState === 0){
            await mongoose.connect(process.env.Mongodb_url)
            console.log('db connnected')
        }
    }
    catch (error){
        console.log(error)
    }
}

export default connectDB