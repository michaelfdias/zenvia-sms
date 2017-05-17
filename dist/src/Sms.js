'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sms = function () {
  function Sms() {
    _classCallCheck(this, Sms);

    this._from = null;
    this._to = null;
    this._schedule = null;
    this._message = null;
    this._callbackOption = null;
    this._id = null;
    this._aggregateId = null;
  }

  _createClass(Sms, [{
    key: 'from',
    value: function from() {
      var _from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_from) {
        this._from = _from;
        return this;
      }
      return this._from;
    }
  }, {
    key: 'to',
    value: function to() {
      var _to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_to) {
        this._to = _to;
        return this;
      }
      return this._to;
    }
  }, {
    key: 'schedule',
    value: function schedule() {
      var datetime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm';

      if (datetime) {
        this._schedule = (0, _moment2.default)(datetime, format);
        return this;
      }
      return this._schedule;
    }
  }, {
    key: 'message',
    value: function message() {
      var _message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_message) {
        this._message = _message;
        return this;
      }
      return this._message;
    }
  }, {
    key: 'callbackOption',
    value: function callbackOption() {
      var _callbackOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_callbackOption) {
        this._callbackOption = _callbackOption;
        return this;
      }
      return this._callbackOption;
    }
  }, {
    key: 'id',
    value: function id() {
      var _id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_id) {
        this._id = _id;
        return this;
      }
      return this._id;
    }
  }, {
    key: 'aggregateId',
    value: function aggregateId(_aggregateId) {
      if (_aggregateId) {
        this._aggregateId = _aggregateId;
        return this;
      }
      return this._aggregateId;
    }
  }]);

  return Sms;
}();

exports.default = Sms;