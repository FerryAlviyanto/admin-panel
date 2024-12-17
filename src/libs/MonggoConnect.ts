import mongoose from "mongoose";

export const connectMonggoDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }

  return await mongoose.connect(process.env.MONGO_URI!);
};
