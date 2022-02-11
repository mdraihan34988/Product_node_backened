const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const product = require("./app/routes/productRoute")
const app = express();
dotenv.config();
app.set('trust proxy', true);
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running");
  });
app.use("/api/product",product);
app.listen(process.env.APP_PORT,() => console.log(`Server is running at http://localhost:${process.env.APP_PORT}`));