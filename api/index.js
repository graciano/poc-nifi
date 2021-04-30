const express = require('express')
const faker = require('faker')
const { promises: fs } = require('fs')

const LOG_PATH = '/usr/app/log/access.log'
const app = express()
const port = 3000

app.use(express.json())

function writeLog (str) {
  fs.appendFile(LOG_PATH, `\r\n[${new Date()}]: ${str}`)
}

writeLog('initializing app')

app.get('/', (req, res) => {
  writeLog('/')
  res.send('Hello World!')
})

app.post('/profile', (req, res) => {
  writeLog('post profile')
  writeLog(`body: ${JSON.stringify(req.body)}`)
  res.send('Profile created!').status(201)
})

app.get('/profile', (req, res) => {
  writeLog('get profile')
  writeLog(`query: ${JSON.stringify(req.query)}`)
  res.json({
    ...req.query,
    phone: faker.phone.phoneNumber()
  }).status(201)
})

app.listen(port, () => {
  writeLog(`Example app listening at http://localhost:${port}`)
})
