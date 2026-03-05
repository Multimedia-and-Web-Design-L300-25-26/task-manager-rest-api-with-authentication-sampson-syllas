import mongoose from "mongoose";

const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);

    // In tests, don't kill the process so Jest can report the error
    if (process.env.NODE_ENV === "test") {
      throw error;
    }

    process.exit(1);
  }
};

export default connectDB;