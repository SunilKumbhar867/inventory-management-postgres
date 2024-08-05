require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
// configure db
const db = require("./models/index.js");
const port = process.env.PORT || 3000;

// * Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//for checking api
app.get("/", (req, res) => {
  return res.json({ message: "It's working post micro ..." });
});

//router according to version
// * Routes
// import Routes from "./routes/index.js";
const Routes = require("./routes/index.js");
app.use(Routes);


db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
