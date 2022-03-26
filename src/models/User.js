const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        minLength: 1
    },
    email: {
        type: String,
        pattern:
            '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$'
    },
    password: {
        type: String,
        minLength: 4
    },
    created_at: {
        type: String,
        format: "date",
        default: new Date().toISOString()
    },
    updated_at: {
        type: String,
        format: "date",
        default: new Date().toISOString()
    }
});

const User = model("user", UserSchema);

module.exports = User;
