import * as vscode from "vscode";
import {
  extensionActivation,
  extensionDeactivation,
  firstTimeActivation,
} from "./util";

export async function activate(context: vscode.ExtensionContext) {
  console.log(
    `Congratulations, your extension "${context.extension.packageJSON.displayName}" installed!`
  );
  firstTimeActivation(context);

  const activateCommand = vscode.commands.registerCommand(
    "qpack.activate",
    () => extensionActivation(context)
  );
  const deactivateCommand = vscode.commands.registerCommand(
    "qpack.deactivate",
    () => extensionDeactivation(context)
  );
  context.subscriptions.push(activateCommand, deactivateCommand);
}

export function deactivate(context: vscode.ExtensionContext) {
  extensionDeactivation(context);
}
