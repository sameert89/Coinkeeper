export class RegisterFormModel {
  public name: String;
  public email: String;
  public password: String;
  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
