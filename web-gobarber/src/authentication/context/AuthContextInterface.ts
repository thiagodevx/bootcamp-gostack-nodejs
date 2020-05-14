export default interface AuthContextInterface {
  name: string
  token: string
  user: {}
  signIn(email: string, password: string): void
}
