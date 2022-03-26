const errorCodes = {
    USER_NOT_FOUND: {
        status: false,
        message: "User doesn't exists",
        status_code: 401
    },
    INVALID_PASSWORD: {
        status: false,
        message: "Invalid Password",
        status_code: 400
    },
    INTERNAL_SERVER_ERROR: {
        status: false,
        message: "Internal Server Error. Please try again",
        status_code: 500
    },
    USER_ALREADY_EXIST: {
        status: false,
        message: "User already exists",
        status_code: 409
    },
    TOKEN_INVALID: {
        status: false,
        message: "Invalid or expired Token",
        status_code: 403
    },
    TOKEN_REQUIRED: {
        status: false,
        message: "Token is required",
        status_code: 401
    },
    DUPLICATE_ENTRY: {
        status: false,
        message: "Duplicate Entry",
        status_code: 409
    },
    NO_USER_EXIST: {
        status: false,
        message: "No user exist",
        status_code: 204
    }
};

module.exports = {
    errorCodes
};
