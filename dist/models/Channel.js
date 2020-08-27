"use strict";
exports.__esModule = true;
exports.Channel = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    name: String,
    teamid: String,
    users: [String],
    private: Boolean
});
exports.Channel = mongoose_1.model("Channel", schema);
