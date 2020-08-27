"use strict";
exports.__esModule = true;
exports.Team = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    name: String,
    owner: String
});
exports.Team = mongoose_1.model("Team", schema);
