const serviceHandler = (method) => {
    return function (req, res, next) {
        method(req)
            .then((response) => {
                req.response = {
                    status: true,
                    status_code: 200,
                    message: "Success",
                    ...response
                };
                console.log({ response });
                next();
            })
            .catch((error) => {
                console.error({ error });
                req.response = {
                    status: false,
                    status_code: error["status_code"] || 500,
                    message: error["message"]
                };

                next();
            });
    };
};

module.exports = {
    serviceHandler
};
