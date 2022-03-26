const _ = require("lodash");

const errorHandler = (error, req, res, next) => {
    if (error.name == "JsonSchemaValidationError") {
        let errorMessage = "";
        if (error.validationErrors.query) {
            errorMessage = _.map(error.validationErrors.query, (obj) => {
                return `${obj.dataPath} ${obj.keyword} ${obj.message}`;
            }).join(", ");
        } else if (error.validationErrors.params) {
            errorMessage = _.map(error.validationErrors.params, (obj) => {
                return `${obj.dataPath} ${obj.keyword} ${obj.message}`;
            }).join(", ");
        } else {
            errorMessage = _.map(error.validationErrors.body, (obj) => {
                return `${obj.dataPath} ${obj.keyword} ${obj.message}`;
            }).join(", ");
        }
        let error_payload = {
            status: false,
            message: errorMessage || "Invalid Details",
            status_code: 406
        };
        res.status(406).json(error_payload);
    }
    console.log(error);
    res.status(500).json({
        status: false,
        status_code: 500,
        message: error["message"] || "Server error. Please try again"
    });
};

module.exports = errorHandler;
