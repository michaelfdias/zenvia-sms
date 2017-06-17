const request = require('request');
const Response = require('./Response');

module.exports = class Sender {
  constructor(auth) {
    this._auth = auth;
    this._body = {};
    this._baseUrl = 'https://api-rest.zenvia360.com.br';
    this._paths = [];
    this._defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }

  _headers() {
    return Object.assign(this._defaultHeaders, this._auth.headers());
  }

  _url() {
    const url = [ this._baseUrl ].concat(this._paths);
    return url.join('/');
  }

  _req() {
    return {
      method: 'POST',
      body: JSON.stringify(this._body),
      url: this._url(),
      headers: this._headers(),
    };
  }

  _buildSmsBody(sms) {
    const body = {};

    if (sms.from()) body.from = sms.from();
    if (sms.to()) body.to = sms.to();
    if (sms.schedule()) body.schedule = sms.schedule().format('YYYY-MM-DDTHH:mm');
    if (sms.message()) body.msg = sms.message();
    if (sms.callbackOption()) body.callbackOption = sms.callbackOption();
    if (sms.id()) body.id = sms.id();

    return body;
  }

  _buildSmsList(smsList) {
    return smsList.map((sms) => {
      return this._buildSmsBody(sms);
    });
  }

  _buildSingleBody(sms) {
    const sendSmsRequest = this._buildSmsBody(sms);

    if (sms.aggregateId()) sendSmsRequest.aggregateId = sms.aggregateId();

    return { sendSmsRequest };
  }

  _buildMultiBody(smsList, aggregateId = null) {
    const sendSmsMultiRequest = {};
    
    if (aggregateId) sendSmsMultiRequest.aggregateId = aggregateId;

    sendSmsMultiRequest.sendSmsRequestList = this._buildSmsList(smsList);

    return { sendSmsMultiRequest };
  }

  single(sms) {
    this._body = this._buildSingleBody(sms);
    this._paths = [
      'services',
      'send-sms'
    ];

    return this;
  }

  multi(smsList, aggregateId = null) {
    this._body = this._buildMultiBody(smsList, aggregateId);
    this._paths = [
      'services',
      'send-sms-multiple'
    ];

    return this;
  }

  send() {
    return new Promise((resolve, reject) => {
      request(this._req(), (err, header, body) => {
        if (err) reject(err);
        resolve(new Response(header.headers, body));
      });
    });
  }
}
