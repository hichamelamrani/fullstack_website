import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB Connected Successfully");
    });

    connection.on("error", (err) => {
      console.log("MongoDB Connection Error: ", err);

      process.exit(0);
    });
  } catch (error) {
    console.log("Somthing gose wrong!");
    console.log(error);
  }
}
