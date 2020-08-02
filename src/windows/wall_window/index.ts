import {BrowserWindow, screen} from 'electron';


let wallWindow: BrowserWindow | null;

let url = "https://konachan.com/image/d1c057a2183860b622d8df382ff1e3df/Konachan.com%20-%20311697%202girls%20bondage%20konishi_%28pixiv12218414%29%20nipples%20nude%20pussy%20ram_%28re%3Azero%29%20rem_%28re%3Azero%29%20short_hair%20signed%20twins%20uncensored%20watermark.jpg"

url = "file:///Users/ssrcoder/Desktop/1.jpg"

url = process.env.WEBPACK_DEV_SERVER_URL as string

function createWallWindow() : BrowserWindow {
    wallWindow = new BrowserWindow({
        width: screen.getPrimaryDisplay().workAreaSize.width, 
        height: screen.getPrimaryDisplay().workAreaSize.height, 
        frame: false,
        // useContentSize: true,
        center:true,
        type: 'desktop',
        webPreferences: {
            webSecurity: false, // 文件安全，为false则可以载入本地文件
        }
    })

    wallWindow.loadURL(url)

    if (!process.env.IS_TEST) wallWindow.webContents.openDevTools({
        mode: "undocked"
    });


    return wallWindow
}

export {
    wallWindow,
    createWallWindow
}