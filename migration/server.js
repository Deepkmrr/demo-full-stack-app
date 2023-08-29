const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//routers
const router = require("./Routes/loginEmployeeRoutes.js");
app.use("/api/employee", router);

const routers = require("./Routes/employeeDetailsRoutes.js");
app.use("/api/detailsemployee", routers);

//testing api

app.get("/", (req, res) => {
  res.json({ messgae: "hello from api" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
