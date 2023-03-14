const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  start: (data) => ipcRenderer.send("start", data), //add handler
  stop: (data) => ipcRenderer.send("stop", data),
});
