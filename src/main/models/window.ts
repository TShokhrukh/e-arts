import { BrowserWindow, BrowserWindowConstructorOptions, WebContents } from 'electron'
import { IWindow } from './../types/types'

export abstract class Window implements IWindow {
  abstract win: BrowserWindow

  get id (): number {
    return this.win.webContents.id
  }

  get webContents (): WebContents {
    return this.win.webContents
  }

  public show (): void {
    this.win.show()
  }

  public hide (): void {
    this.win.hide()
  }

  public close (): void {
    this.win.close()
  }

  public maximize (): void {
    this.win.maximize()
  }

  public unmaximize (): void {
    return this.win.unmaximize()
  }

  protected create (): BrowserWindow {
    return new BrowserWindow(this.getWindowOptions())
  }

  protected getWindowOptions (): BrowserWindowConstructorOptions {
    return {
      minWidth: 1290,
      minHeight: 720,
      width: 1290,
      height: 720,
      show: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      }
    }
  }
}
