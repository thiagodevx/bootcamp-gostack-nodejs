import express from 'express'
import routes from './config/routes'
import './config/database'

const app = express()
app.use(express.json())
app.use(routes)

const port = 3333
app.listen(port, () => console.log(`Server started on port ${port}`))
