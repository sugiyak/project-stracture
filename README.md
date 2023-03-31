# Project Structure Generator for VSCode

The Project Structure Generator is a Visual Studio Code extension that generates a `.text` file describing the file structure of the active project. It ignores unimportant folders such as `.next`, '.git' and `node_modules`.

## Features

- Generates a `project_structure.text` file in the root directory of your project.
- Ignores specified folders, like `.next` and `node_modules`, by default.

## Usage

1. Open a folder containing a project in Visual Studio Code.
2. Press `Ctrl+Shift+P` or `Cmd+Shift+P` (Mac) to open the Command Palette.
3. Type "Generate Project Structure" in the Command Palette, and select the command when it appears in the list.
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

Github: https://github.com/sugiyak/psfgpt

## License

This extension is licensed under the [MIT License](LICENSE).