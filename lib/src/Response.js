export default class Response {
  constructor(header, body) {
    this._header = header;
    this._body = body;
  }

  header() {
    return this._header;
  }

  body() {
    return this._body;
  }
}
