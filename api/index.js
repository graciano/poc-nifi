const express = require('express')
const faker = require('faker')
const { promises: fs } = require('fs')

const LOG_PATH = '/usr/app/api/log/access.log'
const app = express()
const port = 3000

function writeLog (...data) {
  fs.writeFile(LOG_PATH, `[${new Date()}]: ${data.toString()}`)
}

writeLog('initializing app')

app.get('/', (req, res) => {
  writeLog('/')
  writeLog(req.query)
  writeLog(req.body)
  res.send('Hello World!')
})

app.post('/profile', (req, res) => {
  writeLog('post profile')
  writeLog(req.query)
  writeLog(req.body)
  res.send('Profile created!').status(201)
})

app.get('/profile', (req, res) => {
  writeLog('get profile')
  writeLog(req.body)
  writeLog(req.query)
  res.json({
    ...req.query,
    phone: faker.phone.phoneNumber()
  }).status(201)
})

app.post('/reward', (req, res) => {
  writeLog('post reward')
  writeLog(req.query)
  writeLog(req.body)
  res.send('Reward created!').status(201)
})

app.listen(port, () => {
  writeLog(`Example app listening at http://localhost:${port}`)
})
