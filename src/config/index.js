const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const config = {
    PORT: 8000,
    // MONGO_URI: "mongodb://localhost:27020",
    MONGO_URI:
        "mongodb+srv://Babu:3BKQ9bslofIypSVb@cluster0.b5cj1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    JWT_SECRET: "FQ394TQ-394UT93QTQ34TRWER"
};

module.exports = config;
