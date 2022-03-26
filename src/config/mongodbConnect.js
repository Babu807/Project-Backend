const mongoose = require("mongoose");

const config = require("./index.js");
const { MONGO_URI } = config;

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`MongoDB ${MONGO_URI} Connected`))
    .catch((err) => console.error(err));
