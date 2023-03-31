// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

//import 
const config = vscode.workspace.getConfiguration('project-structure');

const ignoreFolders = config.get<string[]>('ignoreFolders') ?? [];


function generateFileStructure(
  directoryPath: string,
  depth: number = 0
): string {
  let structure = '';

  const files = fs.readdirSync(directoryPath);
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !ignoreFolders.includes(file)) {
      structure += `${'  '.repeat(depth)}- ${file}\n`;
      structure += generateFileStructure(filePath, depth + 1);
    } else if (stat.isFile()) {
      structure += `${'  '.repeat(depth)}- ${file}\n`;
    }
  }

  return structure;
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "project-stracture" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand(
		'project-structure.generateStructure',
		() => {
		  const workspaceFolders = vscode.workspace.workspaceFolders;
		  if (!workspaceFolders || workspaceFolders.length === 0) {
			vscode.window.showErrorMessage(
			  'No workspace folder is open. Please open a workspace folder to use this extension.'
			);
			return;
		  }
	
		  const rootPath = workspaceFolders[0].uri.fsPath;
		  const fileStructure = generateFileStructure(rootPath);
	
		  fs.writeFile(
			path.join(rootPath, 'project_structure.text'),
			fileStructure,
			(err) => {
			  if (err) {
				vscode.window.showErrorMessage(
				  'An error occurred while generating the file structure.'
				);
			  } else {
				vscode.window.showInformationMessage(
				  'File structure generated successfully!'
				);
			  }
			}
		  );
		}
	  );

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
