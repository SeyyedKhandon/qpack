# Web Quality/Metric Extension Pack (QPack)

### QPack

Web Quality/Metric Development Essentials Extension Pack for Visual Studio Code

> These are some of my favorite extensions which helped me to keep to check the quality of my code.

### Pre-defined settings which you maybe want to use:

1. press `ctrl+shift+p`
2. type `settings`
3. click on `Preferences: Open settings (JSON)` to open your settings.json file
4. add these lines to the end of JSON Settings:

```json
{
    "cSpell.userWords": [],
    "eslint.alwaysShowStatus": true,
    "eslint.codeAction.showDocumentation": {
      "enable": true
    },
    "eslint.lintTask.enable": true,
    "errorLens.statusBarMessageEnabled": true,
    "errorLens.scrollbarHackEnabled": true,
    "errorLens.fontStyleItalic": true,
    "errorLens.statusBarColorsEnabled": true,
    "errorLens.addNumberOfDiagnostics": true,
    "errorLens.addAnnotationTextPrefixes": true,
    "errorLens.gutterIconsEnabled": true
}
```

**Notes**:
-  To enable `Sonar lint`, you have to install `java runtime environment(jre)`, which it will ask to download it when it has been installed.

- You can use [Tech Debt Metrics](https://marketplace.visualstudio.com/items?itemName=Stepsize.tech-debt-tracker) as a complement to `CodeMetrics` metric checker(But it is heavy).



## Extensions Included

- 1- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint JavaScript into VS Code.

- 2- [CodeMetrics](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics) - Computes complexity in TypeScript / JavaScript files.

- 3- [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode) - SonarLint is an IDE extension that helps you detect and fix quality issues as you write code in JavaScript, TypeScript, Python, Java, HTML and PHP.

- 4- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - Spelling checker for source code

- 5- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - Improve highlighting of errors, warnings and other language diagnostics.

- 6- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) - Display import/require package size in the editor

## Relevant Links

- [Github](https://github.com/SeyyedKhandon/qpack)
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=SeyyedKhandon.qpack)

## Generate Package

You can customize this pack via forking and changing it in the `package.json` and use these instructions to generate a new one:
> If you don't have [node.js](https://nodejs.org/en/), first download and install the latest version. then you have to install `vsce` via `npm install -g vsce`.

1. `vsce package`
2. `vsce publish`

**Enjoy!**
