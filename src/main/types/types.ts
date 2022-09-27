import { BrowserWindow, WebContents } from 'electron'

export interface IWindow {
  win: BrowserWindow
  get webContents(): WebContents
  get id(): number

  show(): void
  hide(): void
  close(): void
  maximize(): void
  unmaximize(): void
}
