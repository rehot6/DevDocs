"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const vscode = require("vscode");
// const sites_1 = require("./const/sites");
// function getWebviewContent(url) {
//     return `<iframe src="${url}" style="width:100vw;height:100vh;"/>`;
// }
// const loadHandler = (site, callbackParams = null) => {
//     const panel = vscode.window.createWebviewPanel(site.tag, site.title, site.position, site.options);
//     panel.webview.html = getWebviewContent(site.path);
//     site?.callback?.(callbackParams);
// };
// const load = (context, site) => {
//     const subscription = vscode.commands.registerCommand(site.cmd, () => {
//         loadHandler(site);
//     });
//     context.subscriptions.push(subscription);
// };
// module.exports = function (context) {
//     sites_1.sites.forEach((site) => {
//         load(context, site);
//     });
// };
//# sourceMappingURL=open-sites.js.map