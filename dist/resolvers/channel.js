"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var Team_1 = require("../models/Team");
var User_1 = require("../models/User");
var Member_1 = require("../models/Member");
var Channel_1 = require("../models/Channel");
exports["default"] = {
    createPrivate: function (_, args, _a) {
        var req = _a.req;
        return __awaiter(void 0, void 0, void 0, function () {
            var team, users, _b, _c, _i, key, _d, _e, _f, newChannel;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!req.user) {
                            throw new Error("Not Authenticated");
                        }
                        return [4 /*yield*/, Team_1.Team.findById(args.teamid)];
                    case 1:
                        team = _g.sent();
                        if (!team) {
                            return [2 /*return*/, false];
                        }
                        users = __spreadArrays(args.users, [req.user.uname]);
                        _b = [];
                        for (_c in users)
                            _b.push(_c);
                        _i = 0;
                        _g.label = 2;
                    case 2:
                        if (!(_i < _b.length)) return [3 /*break*/, 8];
                        key = _b[_i];
                        return [4 /*yield*/, User_1.User.findOne({ uname: users[key] })];
                    case 3:
                        if (!!(_g.sent())) return [3 /*break*/, 4];
                        return [2 /*return*/, false];
                    case 4:
                        _e = (_d = Member_1.Member).findOne;
                        _f = {
                            teamid: args.teamid
                        };
                        return [4 /*yield*/, User_1.User.findOne({ uname: users[key] })];
                    case 5: return [4 /*yield*/, _e.apply(_d, [(_f.userid = (_g.sent())._id,
                                _f)])];
                    case 6:
                        if (!(_g.sent())) {
                            return [2 /*return*/, false];
                        }
                        else {
                            return [3 /*break*/, 7];
                        }
                        _g.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 2];
                    case 8:
                        newChannel = new Channel_1.Channel({
                            name: args.name,
                            teamid: args.teamid,
                            users: users,
                            private: true
                        });
                        newChannel.save();
                        return [2 /*return*/, true];
                }
            });
        });
    },
    createPublic: function (_, _a, _b) {
        var name = _a.name, teamid = _a.teamid;
        var req = _b.req;
        return __awaiter(void 0, void 0, void 0, function () {
            var team, newChannel;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!req.user) {
                            throw new Error("Not Authenticated");
                        }
                        return [4 /*yield*/, Team_1.Team.findById(teamid)];
                    case 1:
                        team = _c.sent();
                        if (!team) {
                            return [2 /*return*/, false];
                        }
                        newChannel = new Channel_1.Channel({
                            name: name,
                            teamid: teamid,
                            private: false
                        });
                        newChannel.save();
                        return [2 /*return*/, true];
                }
            });
        });
    },
    getAll: function (_, _a, _b) {
        var teamid = _a.teamid;
        var req = _b.req;
        return __awaiter(void 0, void 0, void 0, function () {
            var team, channels, publicChannels, allChannels;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!req.user) {
                            throw new Error("Not Authenticated");
                        }
                        return [4 /*yield*/, Team_1.Team.findById(teamid)];
                    case 1:
                        team = _c.sent();
                        if (!team) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, Channel_1.Channel.find({ users: { $in: [req.user.uname] }, teamid: teamid })];
                    case 2:
                        channels = _c.sent();
                        return [4 /*yield*/, Channel_1.Channel.find({ private: false, teamid: teamid })];
                    case 3:
                        publicChannels = _c.sent();
                        allChannels = publicChannels.concat(channels);
                        return [2 /*return*/, allChannels];
                }
            });
        });
    },
    inviteTo: function (_, _a, _b) {
        var channelid = _a.channelid, users = _a.users;
        var req = _b.req;
        return __awaiter(void 0, void 0, void 0, function () {
            var channel, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!req.user) {
                            throw new Error("Not Authenticated");
                        }
                        console.log(users);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Channel_1.Channel.findById(channelid, function (err, doc) {
                                doc.users = __spreadArrays(doc.users, users);
                                doc.save();
                            })];
                    case 2:
                        channel = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    }
};
