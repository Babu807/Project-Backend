const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("./config/mongodbConnect");
// routes
const authRoutes = require("./routes/auth.js");
const errorHandler = require("./utils/errorHandler.js");
const bodyParser = require("body-parser");
const { responseSender } = require("./utils/responseSender");

const app = express();
app.use(cors());

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);

app.use(responseSender);

app.use(errorHandler);

app.use(function (req, res, next) {
    res.status(404).json({
        status: false,
        status_code: 404,
        message: "Not Found"
    });
});

module.exports = app;
