export interface GeneralObject {
  [index: string]: string | number | boolean | GeneralObject;
}

export const defaultSettings = {
  "eslint.alwaysShowStatus": true,
  "eslint.lintTask.enable": true,
  "eslint.codeAction.showDocumentation": {
    enable: true,
  },
  "codemetrics.nodeconfiguration.ReturnStatement": 0.1,
  "codemetrics.nodeconfiguration.SwitchStatement": 0.1,
  "codemetrics.nodeconfiguration.JsxSelfClosingElement": 0.1,
  "codemetrics.nodeconfiguration.JsxElement": 0.2,
  "codemetrics.basics.CodeLensHiddenUnder": 4,
  "sonarlint.disableTelemetry": true,
};
