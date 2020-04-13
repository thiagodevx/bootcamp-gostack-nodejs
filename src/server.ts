import express from 'express'

const app = express()
const port = 3333

app.get('/', (req, res) => {
  res.json({ message: 'Hello world' })
})

app.listen(port, () => console.log(`Server started on port ${port}`))
