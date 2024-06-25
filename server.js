import cors from 'cors'
import express from 'express'
import getDefaultItems from './store/items.js'
import { v4 as uuid } from 'uuid'

let items = getDefaultItems()

export const port = 3001

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

const app = express()

app.use(cors(corsOptions))
app.use(express.json())

app.get('/items', (_req, res) => {
  res.send({ status: 200, items })
})

app.post('/items', (req, res) => {
  items.unshift({ id: uuid(), name: req.body.name, price: req.body.price })
  return res.send({ status: 200, items })
})

app.listen(port, () => {
  console.log(`Messages app listening on port ${port}`)
})
