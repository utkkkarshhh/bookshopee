const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const booksRouter = require("./routes/bookRoutes/bookRoutes");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("App is up");
});

app.use("/api/books", booksRouter);

app.listen(process.env.PORT, (req, res) => {
  console.log(`App is live on port ${process.env.PORT}`);
});
