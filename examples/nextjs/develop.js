import {createServer} from 'node:http'
import {parse} from 'node:url'
import {WebSocketServer} from 'ws'
import next from 'next'
import chokidar from 'chokidar'

const hostname = 'localhost'
const port = 3000
const app = next({
  dev: true,
  hostname,
  port,
})
const handler = app.getRequestHandler()
const wss = new WebSocketServer({noServer: true})
const watchCallbacks = []

const watcher = chokidar.watch('./content', {
  ignored: /(^|[\/\\])\../,
})

watcher.on('change', event => {
  watchCallbacks.forEach(callback => {
    callback()
  })
})

wss.on('connection', function connection(ws) {
  console.log('connection open')
  ws.on('error', console.error)

  ws.on('close', function close() {
    console.log('closed')
    const index = watchCallbacks.findIndex(onChange)
    watchCallbacks.splice(index, 1)
  })

  watchCallbacks.push(onChange)

  function onChange() {
    ws.send('refresh')
  }
})

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      await handler(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })

  server.once('error', err => {
    console.error(err)
    process.exit(1)
  })

  server.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`)
  })

  server.on('upgrade', function upgrade(request, socket, head) {
    const {pathname} = parse(request.url, true)

    if (pathname === '/_doctocat/refresh-page') {
      wss.handleUpgrade(request, socket, head, function done(ws) {
        wss.emit('connection', ws, request)
      })
    }
  })
})
