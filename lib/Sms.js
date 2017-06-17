const moment = require('moment');

module.exports = class Sms {
  constructor() {
    this._from = null;
    this._to = null;
    this._schedule = null;
    this._message = null;
    this._callbackOption = null;
    this._id = null;
    this._aggregateId = null;
  }

  from(from = null) {
    if (from) {
      this._from = from;
      return this;
    }
    return this._from;
  }

  to(to = null) {
    if (to) {
      this._to = to;
      return this;
    }
    return this._to;
  }

  schedule(datetime = null, format = 'YYYY-MM-DD HH:mm') {
    if (datetime) {
      this._schedule = moment(datetime, format);
      return this;
    }
    return this._schedule;
  }

  message(message = null) {
    if (message) {
      this._message = message;
      return this;
    }
    return this._message;
  }

  callbackOption(callbackOption = null) {
    if (callbackOption) {
      this._callbackOption = callbackOption;
      return this;
    }
    return this._callbackOption;
  }

  id(id = null) {
    if (id) {
      this._id = id;
      return this;
    }
    return this._id;
  }

  aggregateId(aggregateId) {
    if (aggregateId) {
      this._aggregateId = aggregateId;
      return this;
    }
    return this._aggregateId;
  }
}
