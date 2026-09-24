import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials:true,
  
}));
app.use(express.json({limit:"16kb"} ));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));









app.get("/api", (req, res) => {
  res.send("api is working");
});

export { app };