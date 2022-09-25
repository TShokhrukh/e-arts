/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const forgeConfig = {
  packagerConfig: {
    asar: process.env.NODE_ENV === 'development'
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "reddit_2"
      }
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: [
        "darwin"
      ]
    },
    {
      name: "@electron-forge/maker-deb",
      config: {}
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {}
    }
  ],
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        mainConfig: "./webpack.main.config.js",
        renderer: {
          config: "./webpack.renderer.config.js",
          entryPoints: [
            {
              html: "./static/index.html",
              js: "./src/renderer/renderer.ts",
              name: "main_window"
            }
          ]
        }
      }
    ]
  ]
}

module.exports = forgeConfig
