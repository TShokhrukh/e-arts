import { app, BrowserWindow, Menu } from 'electron'
import installExtension, { REACT_DEVELOPER_TOOLS, MOBX_DEVTOOLS } from 'electron-devtools-installer'
import { IWindow } from './types/types'
import { AppWindow } from './windows/app-window'

export class Application {
  static instance = new Application()

  appWindow: IWindow

  public start (): void {
    const gotTheLock = app.requestSingleInstanceLock()

    if (!gotTheLock) {
      this.quit()
      return
    }

    this.onReady()
    return
  }

  public quit (): void {
    return
  }

  private async onReady (): Promise<void> {
    await app.whenReady()

    if (process.env.NODE_ENV === 'development') {
      this.setUpDevExtension()
    }

    Menu.setApplicationMenu(null)
    
    this.appWindow = new AppWindow()
    this.appWindow.show()

    return
  }

  private async setUpDevExtension (): Promise<void> {
    try {
      installExtension([REACT_DEVELOPER_TOOLS, MOBX_DEVTOOLS])
    } catch (error) {
      return
    }
  }
}
