import path from "path"
import process from "process";
import os from "node:os"
var filename = path.basename('C:\Users\hp\Desktop\altschool\node assignment\Task');
console.log(filename);

const FILE_PATH = "C:\Users\hp\Desktop\altschool\node assignment\Task";

console.log('Correct result:', path.win32.basename(FILE_PATH));

if (process.getgid) {
    console.log('Current gid: ' + process.pid());
 };
 console.log(os.userInfo())

 console.log(os.type());