// backend/src/index.js
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env"
});
const dbconnected = async () => {
  await connectDB()
}

dbconnected().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server is running at port http://localhost:${process.env.PORT}`)
  })
}).catch(() => {
  console.log("db connection failed")
})



