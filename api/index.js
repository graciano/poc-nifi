import express from 'express'
import faker from 'faker'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/profile', (req, res) => {
  res.send('Profile created!').status(201)
})

app.get('/profile', (req, res) => {
  res.json({
    ...req.query,
    phone: faker.phone.phoneNumber()
  }).status(201)
})

app.post('/reward', (req, res) => {
  res.send('Reward created!').status(201)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
