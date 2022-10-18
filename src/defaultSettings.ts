import { GeneralObject } from "./util";

export const defaultSettings = [
  { "eslint.alwaysShowStatus": true },
  { "eslint.lintTask.enable": true },
  {
    "eslint.codeAction.showDocumentation": {
      enable: true,
    },
  },
  { "codemetrics.nodeconfiguration.ReturnStatement": 0.1 },
  { "codemetrics.nodeconfiguration.SwitchStatement": 0.1 },
  { "codemetrics.nodeconfiguration.JsxSelfClosingElement": 0.1 },
  { "codemetrics.nodeconfiguration.JsxElement": 0.2 },
] as GeneralObject[];
