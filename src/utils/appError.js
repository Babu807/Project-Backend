const ExtendableError = require("es6-error");

class AppError extends ExtendableError {
    constructor({ status_code = 500, message = "Internal Server Error. Please try again", status = false }) {
        super(message);
        this.status = status;
        this.status_code = status_code;
        this.message = message;
    }
}

module.exports = {
    AppError
};
