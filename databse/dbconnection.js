import mongoose from "mongoose";

export const dbconnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "MERN_HMS",
    }).then(()=>{
        console.log("Database connected");
    }).catch((err) => {
        console.log(`Error while connecting to database: ${err}`);
    });
}