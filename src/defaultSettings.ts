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
] as GeneralObject[];
