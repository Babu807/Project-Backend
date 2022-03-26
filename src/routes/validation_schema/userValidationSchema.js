const userSignupSchema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 1
        },
        email: {
            type: "string",
            format: "email"
        },
        password: {
            type: "string",
            minLength: 4
        },
        created_at: {
            type: "string",
            format: "date"
        },
        updated_at: {
            type: "string",
            format: "date"
        }
    },
    required: ["name", "email", "password"]
};

const userLoginSchema = {
    type: "object",
    properties: {
        email: {
            type: "string",
            format: "email"
        },
        password: {
            type: "string",
            minLength: 4
        }
    },
    required: ["email", "password"]
};

module.exports = {
    userSignupSchema,
    userLoginSchema
};
