import * as vscode from "vscode";
import { defaultSettings, GeneralObject } from "./defaultSettings";
const showDialog = vscode.window.showInformationMessage;

const updateUserSettings = (settings: GeneralObject, remove = false) =>
  Object.entries(settings).forEach(([key, value]) =>
    vscode.workspace
      .getConfiguration()
      .update(
        key,
        remove ? undefined : value,
        vscode.ConfigurationTarget.Global
      )
  );

export function extensionActivation(context: vscode.ExtensionContext) {
  updateUserSettings(defaultSettings);
  showDialog(`${context.extension.packageJSON.displayName} is activated!`);
}

export function firstTimeActivation(context: vscode.ExtensionContext) {
  const version = context.extension.packageJSON.version ?? "1.0.0";
  const previousVersion = context.globalState.get(context.extension.id);
  if (previousVersion === version) return;

  extensionActivation(context);
  context.globalState.update(context.extension.id, version);
}

export function extensionDeactivation(context: vscode.ExtensionContext) {
  // context.globalState.update(context.extension.id, undefined);
  updateUserSettings(defaultSettings, true);
  showDialog(`${context.extension.packageJSON.displayName} is deactivated!`);
}
