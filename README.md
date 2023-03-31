# Project Structure Generator for VSCode

The Project Structure Generator is a Visual Studio Code extension that generates a `.text` file describing the file structure of the active project.

It ignores folders such as `.next`, '.git' and `node_modules`, ".vscode" by default. but you can customize the ignoreFolders list through the VS Code settings UI or directly in their settings.json file.

To add or modify the list of folders you want to ignore, find "Project Structure Generator" on installed extension list and click on setting gear icon -> "Extension Settings". Click on "Edit in settings.json" and add folders to "project-structure.ignoreFolders". You can use the following format:

"project-structure.ignoredFolders": [
    ".git",
    "node_modules",
    ".vscode",
    ...ADDITIONAL FOLDERS
    ]



## Features

- Generates a `project_structure.text` file in the root directory of your project.
- Ignores specified folders.

## Usage

1. Open a folder containing a project in Visual Studio Code.
2. Press `Ctrl+Shift+P` or `Cmd+Shift+P` (Mac) to open the Command Palette.
3. Type "Project_tree" in the Command Palette, and select the command when it appears in the list.
4. The extension will create a `project_structure.text` file in the root directory of the selected project.

## Example Output
- src
  - components
    - Header.tsx
    - Footer.tsx
    - Article.tsx
  - pages
    - index.tsx
    - about.tsx
    - articles
      - [slug].tsx
  - styles
    - global.scss
    - header.scss
    - footer.scss
    - article.scss
  - context
    - AppContext.ts
- package.json
- tsconfig.json
- next.config.js

## Contributing

If you have any suggestions, feature requests, or issues, feel free to open an issue or submit a pull request on the GitHub repository.

Github: https://github.com/sugiyak/project-stracture

## License

This extension is licensed under the [MIT License](LICENSE).