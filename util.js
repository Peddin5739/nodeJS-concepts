function addNumbers(a, b) {
  return a + b;
}

// writing using  Asyc
//default writefile is async
// os waits till its done
// console log will get executed
//node work on console log

const fs = require("fs");

function createFile(name, contents) {
  fs.writeFile(name, contents, "utf-8", function (err) {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Async might be printed before writing to file");
    }
  });
}

// writing using  syc
// node and os both has to wait till its writing

function waitForFile(name, contents) {
  fs.writeFile(name, contents, "utf-8", function (err) {
    if (err) {
      console.log(" error occured while creating");
    } else {
      console.log(
        "file created sucessfully this statement is printed only after the file creation"
      );
    }
  });
}
module.exports = {
  createFile,
  waitForFile,
};
