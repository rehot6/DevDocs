"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const os = require('os');
const path = require('path');
const vscode = require('vscode');
const exec = require('child_process').exec;
const util = {
    log: function (params) {
        console.log(params);
    },
    error: function (params) {
        console.error(params);
    },
    showError: function (params) {
        vscode.window.showError(params);
    }
};
exports.default = util;
//# sourceMappingURL=utils.js.map