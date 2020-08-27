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
exports.__esModule = true;
var User_1 = require("../models/User");
var bcrypt = require("bcryptjs");
var jsonwebtoken_1 = require("jsonwebtoken");
exports["default"] = {
    register: function (_, _a) {
        var uname = _a.uname, email = _a.email, passw = _a.passw;
        var newUser = new User_1.User({
            uname: uname,
            email: email,
            passw: passw
        });
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(newUser.passw, salt);
        newUser.passw = hash;
        newUser.save();
        return true;
    },
    login: function (_, _a, _b) {
        var uname = _a.uname, passw = _a.passw;
        var req = _b.req, res = _b.res;
        return __awaiter(void 0, void 0, void 0, function () {
            var user, token;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, User_1.User.findOne({ uname: uname })];
                    case 1:
                        user = _c.sent();
                        if (!user) {
                            return [2 /*return*/, null];
                        }
                        else {
                            if (bcrypt.compareSync(passw, user.passw)) {
                                token = jsonwebtoken_1.sign({ id: user._id, uname: user.uname }, 'my_secret');
                                return [2 /*return*/, ({
                                        token: token,
                                        uname: uname,
                                        email: user.email,
                                        id: user._id
                                    })];
                            }
                            else {
                                return [2 /*return*/, null];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
};
