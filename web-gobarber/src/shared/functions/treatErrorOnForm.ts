import * as Yup from 'yup'

interface Errors {
  [key: string]: string
}
export default (error: Yup.ValidationError) => {
  const errors: Errors = {}
  error.inner.forEach((validationError: Yup.ValidationError) => {
    const path = validationError.path
    const message = validationError.message
    errors[path] = message
  })
  return errors
}
