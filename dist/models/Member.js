"use strict";
exports.__esModule = true;
exports.Member = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    userid: String,
    teamid: String
});
exports.Member = mongoose_1.model("Member", schema);
