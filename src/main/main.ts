import {
  app,
  BrowserWindow,
  globalShortcut,
} from 'electron'
import os from 'os'
import { Application } from '~/main/application'

app.on('ready', () => {
  start()
})

app.on('window-all-closed', () => {
  if (os.platform() !== 'darwin') {
    close()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    start()
  }
})

app.on('second-instance', () => {
  close()
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})

function start () {
  Application.instance.start()
}

function close () {
  Application.instance.quit()
}
