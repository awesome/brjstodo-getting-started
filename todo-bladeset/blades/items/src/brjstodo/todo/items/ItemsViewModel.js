'use strict';

var ko = require( 'ko' );

function ItemsViewModel() {
  this.todos = ko.observableArray( [
    { title: 'foo' },
    { title: 'bar' }
  ] );
}

module.exports = ItemsViewModel;