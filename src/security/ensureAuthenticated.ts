import { NextFunction, Request, Response } from 'express'
import AuthenticationService from './authentication.service'

const service = new AuthenticationService()

export default async (request: Request, response: Response, next: NextFunction) => {
  try {
    const authHeader = request.headers.authorization
    const userId = await service.checkToken(authHeader)
    request.user = { id: userId }
    next()
  } catch (e) {
    response.status(400).json({ message: e.message })
  }
}
