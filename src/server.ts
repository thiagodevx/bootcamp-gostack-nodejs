import 'reflect-metadata'
import express from 'express'
import routes from './config/routes'
import './config/database'
import multerConfiguration from './config/multerConfiguration'

const app = express()
app.use(express.json())
app.use(routes)
app.use('/files', express.static(multerConfiguration.avatarFolter))

const port = 3333
app.listen(port, () => console.log(`Server started on port ${port}`))
