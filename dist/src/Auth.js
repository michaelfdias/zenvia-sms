'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth = function () {
  function Auth(user, password) {
    _classCallCheck(this, Auth);

    this._user = user;
    this._password = password;
  }

  _createClass(Auth, [{
    key: '_basicAuth',
    value: function _basicAuth() {
      return Buffer.from(this._user + ':' + this._password, 'utf8').toString('base64');
    }
  }, {
    key: 'headers',
    value: function headers() {
      return {
        Authorization: this._basicAuth()
      };
    }
  }]);

  return Auth;
}();

exports.default = Auth;