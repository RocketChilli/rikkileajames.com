/* eslint no-console: 'off', strict: 'off' */

'use strict'

const http = require('http')
const shell = require('child_process')
const { strip } = require('ansicolor')

const hooks = [
  {
    route: '/hooks/generate',
    command: 'npm run generate',
  },
]

const headers = { 'Content-type': 'text/plain' }

const server = http.createServer((req, res) => {
  console.log(req.url)
  const hook = hooks.find((item) => item.route === req.url)

  if (!hook) {
    res.writeHead(404, headers)
    res.end()
    return
  }

  shell.exec(hook.command, (error, stdout, stderr) => {
    if (error || stderr) {
      res.writeHead(500, headers)
      res.end(strip(stderr))
      return
    }

    res.writeHead(200, headers)
    res.end(strip(stdout))
  })
})

server.listen(9000)
