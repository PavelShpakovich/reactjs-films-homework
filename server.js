const express = require('express')
const webpack = require('webpack')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')

const compiler = webpack(config)
const app = express()
const isDeveloping = process.env.NODE_ENV !== 'production'
const port = 3000

if (isDeveloping) {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    }),
  )

  app.use(webpackHotMiddleware(compiler))

  app.use(express.static(path.join(__dirname, 'build')))

  app.use('*', (req, res, next) => {
    compiler.outputFileSystem.readFile(path.join(compiler.outputPath, '/index.html'), (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      return res.end()
    })
  })
} else {
  app.use(express.static(path.join(__dirname, 'build')))

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
}
app.listen(port, (err) => {
  if (err) {
    console.warn(err)
  }
  console.info(`==> 🌎 Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  // open(`http://localhost:${port}/`)
})
