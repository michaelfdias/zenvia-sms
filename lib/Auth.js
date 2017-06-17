module.exports = class Auth {
  constructor(user, password) {
    this._user = user;
    this._password = password;
  }

  _basicAuth() {
    return Buffer
      .from(`${this._user}:${this._password}`, 'utf8')
      .toString('base64');
  }

  headers() {
    return {
      Authorization: this._basicAuth(),
    };
  }
}
