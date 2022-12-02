"use strict";
exports.__esModule = true;
var credential = {
    "user": "admin",
    "password": "pass@123"
};
var submitform = function (arg) {
    console.log(arg.user);
    console.log(arg.password);
};
submitform(credential);
