import mongoose from "mongoose";

export const ConnectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGODB conneceted");
  } catch (error) {
    console.error("FAILED TO CONNECT MONGODB", error);
    process.exit(1);
  }
};
