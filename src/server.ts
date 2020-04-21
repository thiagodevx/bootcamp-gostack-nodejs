import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import routes from './config/routes'
import './config/database'
import multerConfiguration from './config/multerConfiguration'
import AppError from './shared/AppError.model'

const app = express()
app.use(express.json())
app.use(routes)
app.use('/files', express.static(multerConfiguration.avatarFolter))

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({ message: error.message })
  } else {
    response.status(500).json({ message: 'Internal server error' })
  }
})

const port = 3333
app.listen(port, () => console.log(`Server started on port ${port}`))
