"use strict";
exports.__esModule = true;
exports.Message = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    text: String,
    userid: String,
    channelid: String
});
exports.Message = mongoose_1.model("Message", schema);
