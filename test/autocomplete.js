'use strict';

var expect  = require('chai').expect;
var nock    = require('nock');
var Autocomplete = require('../')('k').Autocomplete;

describe('Autocomplete', function () {

  var mock;
  before(function () {
    mock = nock('https://autocomplete.clearbit.com');
  });
  after(nock.cleanAll);
  afterEach(function () {
    mock.done();
  });

  describe('Company#suggest', function () {

    var autcomplete = require('./fixtures/autocomplete');

    it('can suggest a list of companies', function () {
      mock
        .get('/v1/companies/suggest?query=uber')
        .reply(200, autcomplete);
      return Autocomplete.suggest({query: {query:'uber'}})
        .then(function (autcomplete) {
          expect(autcomplete)
            .to.be.an.instanceOf(Array);
        });
    });

  });

});
