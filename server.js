import express from "express";
import HttpError from "./middleware/HttpError.js";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import router from "./router/userRouter.js";

dotenv.config("./.env");

const app = express();

app.use(express.json());

app.use("/user", router);

app.get("/", (req, res) => {
  res.send("hello form server");
});

app.use((req, res, next) => {
  return next(new HttpError("request routes not found", 404));
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  res.status(error.Statuscode || 500).json({
    success: false,
    message: error.message || "internal server error",
  });
});

const port = 5000;

async function startserver() {
  try {
    const connect = await connectDb();

    if (!connect) {
      throw new Error("faild to connectDb", 500);
    }

    app.listen(port, (error) => {
      if (error) {
        return console.log(error.message);
      }
      console.log(`server running on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

startserver();
