import UUIDGenerator from "../identity/UUIDGenerator";
import Email from "../person/Email";
import PasswordFactory from "./PasswordFactory";
import Password from "./Password";

export default class User {
  private constructor(readonly userId: string, readonly email: Email, readonly password: Password, readonly password_type: string) {
  }
  static create(email: string, password: string, password_type: string) {
    const userId = UUIDGenerator.create()
    return new User(userId, new Email(email), PasswordFactory.create(password_type)?.create(password), password_type)
  }
  static restore(userId: string, email: string, password: string, password_type: string, salt: string = "") {
    return new User(userId, new Email(email), PasswordFactory.create(password_type).restore(password, salt), password_type);
  }
  validatePassword(password: string) {
    return this.password.validate(password)
  }
}