/**
 * Created by juandavidcruzgomez on 25/10/2017.
 */

'use strict';

var resource = require('./resource');

exports.Autocomplete = resource.create('Autocomplete', { api: 'autocomplete', version: 1, })
    .extend(null, {
        suggest: function(options) {
            return this.get('/companies/suggest', options);
        },
    });