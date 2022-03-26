const { Router } = require("express");
const { Validator } = require("express-json-validator-middleware");
const authMiddleware = require("../middleware/authProtection.js");
const {
    userSignupSchema,
    userLoginSchema
} = require("./validation_schema/userValidationSchema.js");
const authService = require("../services/authService");
const { serviceHandler } = require("../utils/serviceHandler.js");
const { authHandler } = require("../utils/authHandler.js");

const router = Router();
const validate = new Validator({ allErrors: true }).validate;

router.post("/login", validate({ body: userLoginSchema }), (req, res, next) =>
    serviceHandler(authService.login)(req, res, next)
);

router.post("/signup", validate({ body: userSignupSchema }), (req, res, next) =>
    serviceHandler(authService.signup)(req, res, next)
);

router.get(
    "/user",
    (req, res, next) => authHandler(authMiddleware.auth)(req, res, next),
    (req, res, next) =>
        serviceHandler(authService.getUserDetailById)(req, res, next)
);

module.exports = router;
