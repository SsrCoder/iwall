import { BrowserWindow } from 'electron'

let mainWindow: BrowserWindow | null

function createMainWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: (process.env
        .ELECTRON_NODE_INTEGRATION as unknown) as boolean,
    },
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools()
  } else {
    // Load the index.html when not in development
    mainWindow.loadURL('app://./index.html')
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

export { mainWindow, createMainWindow }
