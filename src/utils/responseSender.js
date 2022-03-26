const { errorCodes } = require("./errorCodes");

const responseSender = (req, res, next) => {
    if (!req.response) res.status(500).json(errorCodes["INTERNAL_SERVER_ERROR"]);

    res.status(req.response.status_code).json(req.response);
};

module.exports = {
    responseSender
};
