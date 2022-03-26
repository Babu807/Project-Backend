const jwt = require("jsonwebtoken");
const config = require("../config/index.js");
const { errorCodes } = require("../utils/errorCodes.js");
const { AppError } = require("../utils/appError");

const { JWT_SECRET } = config;

const auth = async (req) => {
    req.user = decodeToken(req);

    return;
};

const decodeToken = (req) => {
    const token = req.header("Authorization");

    if (!token) throw new AppError(errorCodes["TOKEN_REQUIRED"]);

    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        throw new AppError(errorCodes["TOKEN_INVALID"]);
    }
};

module.exports = {
    auth
};
