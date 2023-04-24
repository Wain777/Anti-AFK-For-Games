const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  start: (data) => ipcRenderer.send("start", data),
  stop: (data) => ipcRenderer.send("stop", data),
});