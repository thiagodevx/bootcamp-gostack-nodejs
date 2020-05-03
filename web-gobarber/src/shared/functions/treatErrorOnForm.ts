import * as Yup from 'yup'

export default (error: Yup.ValidationError) => {
  const errors: any = {}
  error.inner.forEach((validationError: Yup.ValidationError) => {
    const path = validationError.path
    const message = validationError.message
    errors[path] = message
  })
  return errors
}
