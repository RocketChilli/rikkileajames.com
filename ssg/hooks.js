/* eslint no-console: 'off', strict: 'off' */

'use strict'

const express = require('express')
const shell = require('child_process')
const { strip } = require('ansicolor')

const hooks = [
  {
    name: 'generate',
    command: 'npm run generate',
  },
]

/**
 * Run a command and return the output data, stripped of ANSI codes
 * @param {string} cmd - The command to run
 * @return {promise}
 */
const run = (cmd) => (
  new Promise((resolve, reject) => {
    shell.exec(cmd, (error, stdout, stderr) => {
      if (error || stderr) {
        reject(strip(stderr))
        return
      }

      resolve(strip(stdout))
    })
  })
)

/**
 * Match a hook name and run the associated command
 * @param {object} req
 * @param {object} res
 */
const controller = (req, res) => {
  console.log(req.url)
  const hook = hooks.find((item) => item.name === req.params.name)

  if (!hook) {
    res.status(404).send('Not found')
    return
  }

  res.set({ 'Content-Type': 'text/plain' })

  run(hook.command)
    .then((output) => res.send(output))
    .catch((output) => res.set(500).send(output))
}

// Configure and run the app
const port = 80
const app = express()
app.post('/hooks/:name', controller)

console.log(`Site generator hooks listening on port ${port}`)
const server = app.listen(port)

// Shutdown gracefully
process.on('SIGTERM', () => { server.close(process.exit) })
