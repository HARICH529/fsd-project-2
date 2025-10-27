import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://harikrishnachunduri123_db_user:jg8sJIjTRFOI5SLQ@cluster0.3t3gztw.mongodb.net/?appName=Cluster0");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("error to connect DB", error);
    process.exit(1);
  }
};
