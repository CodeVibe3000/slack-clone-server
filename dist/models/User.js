"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    email: String,
    uname: String,
    passw: String
});
exports.User = mongoose_1.model("User", schema);
