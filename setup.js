#!/usr/bin/env node

const path = require('path');
const copyDirRecursive = require("./utils");


const source = path.join(__dirname, 'files');

const projectName = process.argv[2];  // Get project name from the argument
const projectDir = path.join(String(process.cwd()), String(projectName));


if (!projectName) {
    console.error('Please provide a project name as an argument.');
    process.exit(1);
}

try {
    copyDirRecursive(source, projectDir, (sourcePath, destPath) => {
        console.log(`Copied file: ${sourcePath} to ${destPath}`);
    });
    console.log(`Project ${projectName} created successfully!`);
} catch (err) {
    console.error(err);
    process.exit(1);
}