export class SensitiveData {
  private _email:string = "owner@helmet.com"
  private _password:string = "kimano123"


  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }
}
