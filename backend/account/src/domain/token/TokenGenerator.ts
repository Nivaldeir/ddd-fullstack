import { sign, verify } from "jsonwebtoken"
export default class TokenGenerator {
  static create(key: string, email: string, date: Date) {
    const expriresIn = 1000000;
    return sign({ email, iat: date.getTime(), expriresIn }, key)
  }

  static verify(key: string, token: string): any {
    return verify(token, key)
  }
}