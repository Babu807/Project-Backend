const authHandler = (method) => {
    return function (req, res, next) {
        method(req)
            .then(() => {
                next();
            })
            .catch((error) => {
                console.error({ error });
                responseObj = {
                    status: false,
                    status_code: error["status_code"] || 500,
                    message: error["message"]
                };
                res.status(responseObj["status_code"]).json(responseObj);
            });
    };
};

module.exports = {
    authHandler
};
