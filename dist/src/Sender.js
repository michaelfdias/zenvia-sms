'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _Response = require('./Response');

var _Response2 = _interopRequireDefault(_Response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sender = function () {
  function Sender(auth) {
    _classCallCheck(this, Sender);

    this._auth = auth;
    this._body = {};
    this._baseUrl = 'https://api-rest.zenvia360.com.br';
    this._paths = [];
    this._defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }

  _createClass(Sender, [{
    key: '_headers',
    value: function _headers() {
      return Object.assign(this._defaultHeaders, this._auth.headers());
    }
  }, {
    key: '_url',
    value: function _url() {
      var url = [this._baseUrl].concat(this._paths);
      return url.join('/');
    }
  }, {
    key: '_req',
    value: function _req() {
      return {
        method: 'POST',
        body: JSON.stringify(this._body),
        url: this._url(),
        headers: this._headers()
      };
    }
  }, {
    key: '_buildSmsBody',
    value: function _buildSmsBody(sms) {
      var body = {};

      if (sms.from()) body.from = sms.from();
      if (sms.to()) body.to = sms.to();
      if (sms.schedule()) body.schedule = sms.schedule().format('YYYY-MM-DDTHH:mm');
      if (sms.message()) body.msg = sms.message();
      if (sms.callbackOption()) body.callbackOption = sms.callbackOption();
      if (sms.id()) body.id = sms.id();

      return body;
    }
  }, {
    key: '_buildSmsList',
    value: function _buildSmsList(smsList) {
      var _this = this;

      return smsList.map(function (sms) {
        return _this._buildSmsBody(sms);
      });
    }
  }, {
    key: '_buildSingleBody',
    value: function _buildSingleBody(sms) {
      var sendSmsRequest = this._buildSmsBody(sms);

      if (sms.aggregateId()) sendSmsRequest.aggregateId = sms.aggregateId();

      return { sendSmsRequest: sendSmsRequest };
    }
  }, {
    key: '_buildMultiBody',
    value: function _buildMultiBody(smsList) {
      var aggregateId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var sendSmsMultiRequest = {};

      if (aggregateId) sendSmsMultiRequest.aggregateId = aggregateId;

      sendSmsMultiRequest.sendSmsRequestList = this._buildSmsList(smsList);

      return { sendSmsMultiRequest: sendSmsMultiRequest };
    }
  }, {
    key: 'single',
    value: function single(sms) {
      this._body = this._buildSingleBody(sms);
      this._paths = ['services', 'send-sms'];

      return this;
    }
  }, {
    key: 'multi',
    value: function multi(smsList) {
      var aggregateId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this._body = this._buildMultiBody(smsList, aggregateId);
      this._paths = ['services', 'send-sms-multiple'];

      return this;
    }
  }, {
    key: 'send',
    value: function send() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        (0, _request2.default)(_this2._req(), function (err, header, body) {
          if (err) reject(err);
          resolve(new _Response2.default(header.headers, body));
        });
      });
    }
  }]);

  return Sender;
}();

exports.default = Sender;