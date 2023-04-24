const { exec } = require("node:child_process");
const { app, BrowserWindow, ipcMain, ipcRenderer } = require("electron");
const path = require("path");

let win = null;
let loop = 0;

const window = () => {
  win = new BrowserWindow({
    width: 600,
    height: 400,
    resizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  ipcMain.handle("start", (data) => {
    console.log(data);
  }); //handler to window
  ipcMain.handle("stop", (data) => {
    console.log(data);
  }); //handler to window
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  ipcMain.on("start", (event, data) => {
    console.log(data);
    press(data);
  });
  ipcMain.on("stop", (event, data) => {
    console.log(data);
    loop++;
  });
  window();
});

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const press = async (customKey) => {
  let key = "{ }";
  loop = 0;

  while (loop == 0) {
    exec(
      `function command { $obj = New-Object -ComObject WScript.Shell; $obj.SendKeys('${key}${customKey}'); }; command;`,
      { shell: "powershell.exe" },
      (err, output) => {}
    );
    await sleep(1000);
  }
};
