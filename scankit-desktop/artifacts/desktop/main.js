const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("path");

const APP_URL = "https://scan-doc-pro.replit.app/doc-scanner/";

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: "ScanKit — Document Scanner",
    icon: path.join(__dirname, "build", "icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
    show: false,
    backgroundColor: "#ffffff",
  });

  win.loadURL(APP_URL);

  win.once("ready-to-show", () => {
    win.show();
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  const menuTemplate = [
    {
      label: "ScanKit",
      submenu: [
        { label: "About ScanKit", role: "about" },
        { type: "separator" },
        { label: "Quit", accelerator: "CmdOrCtrl+Q", click: () => app.quit() },
      ],
    },
    {
      label: "Edit",
      submenu: [
        { role: "undo" }, { role: "redo" },
        { type: "separator" },
        { role: "cut" }, { role: "copy" }, { role: "paste" }, { role: "selectAll" },
      ],
    },
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forceReload" },
        { type: "separator" },
        { role: "resetZoom" },
        { role: "zoomIn" },
        { role: "zoomOut" },
        { type: "separator" },
        { role: "togglefullscreen" },
      ],
    },
    {
      label: "Window",
      submenu: [
        { role: "minimize" },
        { role: "zoom" },
        { role: "close" },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
