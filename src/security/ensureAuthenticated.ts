import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import AuthenticationService from './authentication.service'

const service = new AuthenticationService()

export default (request: Request, response: Response, next: NextFunction) => {
  try {
    const authHeader = request.headers.authorization
    service.checkToken(authHeader)
    next()
  } catch (e) {
    response.status(400).json({ message: e.message })
  }
}
