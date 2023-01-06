const { app, BrowserWindow } = require('electron')
const url = require('url')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  // const filepath = `${__dirname}/build/index.html`
  // console.log('filepath: ', filepath)
  //
  // // win.loadFile('build/index.html')
  // win.loadFile(url.format({
  //   pathname: 'build/index.html',
  //   // pathname: filepath,
  //   // protocol: 'file:',
  //   // slashes: true
  // }))

  //load the index.html from a url
  win.loadURL('http://localhost:3000');

  // win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
