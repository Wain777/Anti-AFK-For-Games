const { exec } = require("node:child_process");
const { app, BrowserWindow } = require("electron");

let win = null;

const window = () => {
  win = new BrowserWindow({
    width: 600,
    height: 400,
    resizable: false
  });
  win.loadFile("index.html");
};

app.whenReady().then(window);

// exec(
//   "function command { $obj = New-Object -ComObject WScript.Shell; $obj.SendKeys('" + key + "'); }; command;", { shell: "powershell.exe" },
//   (err, output) => {
//     console.log(err); 
//   }
// );