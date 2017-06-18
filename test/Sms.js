const assert = require('assert');
const moment = require('moment');
const Sms = require('../lib/Sms');

describe('Sms', function() {
  describe('constructor()', function() {
    it('Should create the _from, _to, _schedule, _message, _callbackOption, _id and _aggregateId properties', function() {
      const sms = new Sms();
      assert.equal(sms._from, null);
      assert.equal(sms._to, null);
      assert.equal(sms._schedule, null);
      assert.equal(sms._message, null);
      assert.equal(sms._callbackOption, null);
      assert.equal(sms._id, null);
      assert.equal(sms._aggregateId, null);
    });
  });

  describe('from()', function() {
    it('Should set the _from property when is passed an argument', function() {
      const from = 'foo';
      const sms = new Sms();
      sms.from(from);
      assert.equal(sms._from, from);
    });

    it('Should return the object itself when is setting the _from property', function() {
      const from = 'foo';
      const sms = new Sms();
      assert.equal(sms.from(from), sms);
    });

    it('Should return the _from property when nothing is passed as argument', function() {
      const from = 'foo';
      const sms = new Sms();
      sms.from(from);
      assert.equal(sms.from(), from);
    });
  });

  describe('to()', function() {
    it('Should set the _to property when is passed an argument', function() {
      const to = 'foo';
      const sms = new Sms();
      sms.to(to);
      assert.equal(sms._to, to);
    });

    it('Should return the object itself when is setting the _to property', function() {
      const to = 'foo';
      const sms = new Sms();
      assert.equal(sms.to(to), sms);
    });

    it('Should return the _to property when nothing is passed as argument', function() {
      const to = 'foo';
      const sms = new Sms();
      sms.to(to);
      assert.equal(sms.to(), to);
    });
  });

  describe('schedule()', function() {
    it('Should set the _schedule property when is passed an argument', function() {
      const schedule = '2017-06-18 12:30';
      const datetimeFormat = 'YYYY-MM-DD HH:mm';
      const expectSchedule = moment(schedule, datetimeFormat);
      const sms = new Sms();
      sms.schedule(schedule);
      assert.deepEqual(sms._schedule, expectSchedule);
    });

    it('Should return the object itself when is setting the _schedule property', function() {
      const schedule = '2017-06-18 12:30';
      const sms = new Sms();
      assert.equal(sms.schedule(schedule), sms);
    });

    it('Should return the _schedule property when nothing is passed as argument', function() {
      const schedule = '2017-06-18 12:30';
      const datetimeFormat = 'YYYY-MM-DD HH:mm';
      const expectSchedule = moment(schedule, datetimeFormat);
      const sms = new Sms();
      sms.schedule(schedule);
      assert.deepEqual(sms.schedule(), expectSchedule);
    });

    it('Should set the _schedule property from a different format of datetime', function() {
      const schedule = '18/06/2017 12h30';
      const datetimeFormat = 'DD/MM/YYYY HHhmm';
      const expectSchedule = moment(schedule, datetimeFormat);
      const sms = new Sms();
      sms.schedule(schedule, datetimeFormat);
      assert.deepEqual(sms.schedule(), expectSchedule);
    });
  });

  describe('message()', function() {
    it('Should set the _message property when is passed an argument', function() {
      const message = 'hello world';
      const sms = new Sms();
      sms.message(message);
      assert.equal(sms._message, message);
    });

    it('Should return the object itself when is setting the _message property', function() {
      const message = 'hello world';
      const sms = new Sms();
      assert.equal(sms.message(message), sms);
    });

    it('Should return the _message property when nothing is passed as argument', function() {
      const message = 'hello world';
      const sms = new Sms();
      sms.message(message);
      assert.equal(sms.message(), message);
    });
  });

  describe('callbackOption()', function() {
    it('Should set the _callbackOption property when is passed an argument', function() {
      const callbackOption = 'ALL';
      const sms = new Sms();
      sms.callbackOption(callbackOption);
      assert.equal(sms._callbackOption, callbackOption);
    });

    it('Should return the object itself when is setting the _callbackOption property', function() {
      const callbackOption = 'ALL';
      const sms = new Sms();
      assert.equal(sms.callbackOption(callbackOption), sms);
    });

    it('Should return the _callbackOption property when nothing is passed as argument', function() {
      const callbackOption = 'ALL';
      const sms = new Sms();
      sms.callbackOption(callbackOption);
      assert.equal(sms.callbackOption(), callbackOption);
    });
  });

  describe('id()', function() {
    it('Should set the _id property when is passed an argument', function() {
      const id = 1;
      const sms = new Sms();
      sms.id(id);
      assert.equal(sms._id, id);
    });

    it('Should return the object itself when is setting the _id property', function() {
      const id = 1;
      const sms = new Sms();
      assert.equal(sms.id(id), sms);
    });

    it('Should return the _id property when nothing is passed as argument', function() {
      const id = 1;
      const sms = new Sms();
      sms.id(id);
      assert.equal(sms.id(), id);
    });
  });

  describe('aggregateId()', function() {
    it('Should set the _aggregateId property when is passed an argument', function() {
      const aggregateId = 2;
      const sms = new Sms();
      sms.aggregateId(aggregateId);
      assert.equal(sms._aggregateId, aggregateId);
    });

    it('Should return the object itself when is setting the _aggregateId property', function() {
      const aggregateId = 2;
      const sms = new Sms();
      assert.equal(sms.aggregateId(aggregateId), sms);
    });

    it('Should return the _aggregateId property when nothing is passed as argument', function() {
      const aggregateId = 2;
      const sms = new Sms();
      sms.aggregateId(aggregateId);
      assert.equal(sms.aggregateId(), aggregateId);
    });
  });
});
