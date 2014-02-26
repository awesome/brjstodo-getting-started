"use strict";

var ko = require( 'ko' );

var ENTER_KEY_CODE = 13;

function InputViewModel() {
	this.todoText = ko.observable( '' );
}

InputViewModel.prototype.keyPressed = function() {
	if( event.keyCode === ENTER_KEY_CODE ) {
    var todoTextValue = this.todoText();
    console.log( todoTextValue );
  }

  return true;
};

module.exports = InputViewModel;
