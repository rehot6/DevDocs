"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const sites_2 = require("./const/sites");

const defaultTag = "DSIV";
const defaultPosition = vscode.ViewColumn.One;
const defaultOptions = {
    enableScripts: true,
};
function getWebviewContent(url) {
    return `<iframe src="${url}" style="width:100vw;height:100vh;"/>`;
}

function activate(context) {
    //require('./open-sites')(context);
    const treeDataProvider = new WebsiteTreeDataProvider();
    const treeView = vscode.window.createTreeView('developer-sites-in-vscode', { treeDataProvider });

    context.subscriptions.push(
        vscode.commands.registerCommand('developer-sites-in-vscode.openWebsite', (site) => {
            //vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url));
            const panel = vscode.window.createWebviewPanel(site.tag, site.name, site.position, site.options);
            panel.webview.html = getWebviewContent(site.url);
            site?.callback?.(callbackParams);
        })
    );
}

class WebsiteTreeDataProvider {
    constructor() {
        this.websites = [
            new Website('chatGPT', 'https://cg.nbchat.top/'),
        ];
        sites_2.sites.forEach((site) => {
            this.websites.push(new Website(site.title, site.path));
        });
    }

    getTreeItem(element) {
        return {
            label: element.name,
            collapsibleState: vscode.TreeItemCollapsibleState.None,
            command: {
                command: 'developer-sites-in-vscode.openWebsite',
                title: 'Open Website',
                arguments: [element]
            }
        };
    }

    getChildren() {
        return Promise.resolve(this.websites);
    }
}

class Website {
    constructor(name, url) {
        this.name = name;
        this.url = url;
        this.position = defaultPosition;
        //this.cmd: `${cmdPrefix}openchatGPT`;
        this.tag = defaultTag;
        this.options = defaultOptions;
    }
}
exports.activate = activate;
function deactivate() {
    console.log('');
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map