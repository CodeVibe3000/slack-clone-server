"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_core_1 = require("apollo-server-core");
exports["default"] = apollo_server_core_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query{\n        hello: String\n        getTeams:[Team]\n        getChannels(teamid: String): [Channel]\n        getMessages(channelid: String): [Message]\n        me: String\n    }\n    type Team{\n        id:ID\n        name:String\n        owner:String\n        channels:[Channel]\n    }\n    type Channel{\n        id:ID\n        name:String\n        teamid:ID\n        users:[String]\n        messages: [Message]\n    }\n    type User{\n        uname:String\n        email:String\n        id: ID\n        token: String\n    }\n    type Message{\n        id: ID\n        text: String\n        channelid: ID\n        userid: String\n        uname: String\n    }\n    type Mutation{\n        createUser(uname:String, email:String, passw:String):Boolean\n        login(uname:String, passw:String):User\n        createTeam(name: String):Team\n        joinTeam(teamid:String):Boolean\n        createPrivateChannel(teamid:String, name:String, users:[String]):Boolean\n        createPublicChannel(teamid:String, name:String):Boolean\n        createMessage(text:String, channelid:String): Boolean\n        inviteToTeam(unames:[String], teamid:String): Boolean\n        inviteToChannel(users:[String], channelid:String): Boolean\n    }\n    type Subscription{\n        newMessage(channelid:String):Message\n    }\n"], ["\n    type Query{\n        hello: String\n        getTeams:[Team]\n        getChannels(teamid: String): [Channel]\n        getMessages(channelid: String): [Message]\n        me: String\n    }\n    type Team{\n        id:ID\n        name:String\n        owner:String\n        channels:[Channel]\n    }\n    type Channel{\n        id:ID\n        name:String\n        teamid:ID\n        users:[String]\n        messages: [Message]\n    }\n    type User{\n        uname:String\n        email:String\n        id: ID\n        token: String\n    }\n    type Message{\n        id: ID\n        text: String\n        channelid: ID\n        userid: String\n        uname: String\n    }\n    type Mutation{\n        createUser(uname:String, email:String, passw:String):Boolean\n        login(uname:String, passw:String):User\n        createTeam(name: String):Team\n        joinTeam(teamid:String):Boolean\n        createPrivateChannel(teamid:String, name:String, users:[String]):Boolean\n        createPublicChannel(teamid:String, name:String):Boolean\n        createMessage(text:String, channelid:String): Boolean\n        inviteToTeam(unames:[String], teamid:String): Boolean\n        inviteToChannel(users:[String], channelid:String): Boolean\n    }\n    type Subscription{\n        newMessage(channelid:String):Message\n    }\n"])));
var templateObject_1;