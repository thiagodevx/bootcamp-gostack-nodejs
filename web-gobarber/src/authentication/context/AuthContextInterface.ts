export default interface AuthContextInterface {
  name: string
  signIn(email: string, password: string): void
}
