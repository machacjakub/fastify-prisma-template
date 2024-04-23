const path = require('path');
function copyDirRecursive(source, destination, callback) {
    const fs = require('fs');

    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination); // Create destination directory if it doesn't exist
    }

    const files = fs.readdirSync(source);

    for (const file of files) {
        const sourcePath = path.join(source, file);
        const destPath = path.join(destination, file);

        if (fs.statSync(sourcePath).isDirectory()) {
            // Recursively copy subdirectories
            copyDirRecursive(sourcePath, destPath, callback);
        } else {
            // Copy file
            fs.copyFileSync(sourcePath, destPath, fs.constants.COPYFILE_EXCL); // Avoid overwriting existing files
        }

        if (callback) {
            callback(sourcePath, destPath); // Optional callback for progress reporting
        }
    }
}

module.exports = copyDirRecursive;