const { createFile, waitForFile } = require("./util");

createFile("file1", "Asynchronously created  file");
waitForFile("file2", "Synchronously created file");
