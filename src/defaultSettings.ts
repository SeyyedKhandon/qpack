import { GeneralObject } from "./util";

export const defaultSettings = [
  { "cSpell.userWords": [] },
  { "eslint.alwaysShowStatus": true },
  {
    "eslint.codeAction.showDocumentation": {
      enable: true,
    },
  },
  { "eslint.lintTask.enable": true },
  { "errorLens.statusBarMessageEnabled": true },
  { "errorLens.scrollbarHackEnabled": true },
  { "errorLens.fontStyleItalic": true },
  { "errorLens.statusBarColorsEnabled": true },
  { "errorLens.addNumberOfDiagnostics": true },
  { "errorLens.addAnnotationTextPrefixes": true },
  { "errorLens.gutterIconsEnabled": true },
  { "errorLens.followCursor": "closestProblem" },
] as GeneralObject[];
