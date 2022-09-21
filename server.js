const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.dc6tcnp.mongodb.net/doodle-ooo?retryWrites=true&w=majority`,
  () => console.log("The Doodle-ooo server is running")
);

app.use("/gallery", require("./routes/galleryRouter"));
app.use("/prompts", require("./routes/promptRouter"));

app.use((err, req, res, next) => {
  return res.send({ errMsg: err.message });
});

app.listen("8000", () => {
  console.log("The server is running on port 8000");
});
