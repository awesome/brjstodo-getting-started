'use strict';

var InputViewModel = require( 'brjstodo/todo/input/InputViewModel' );
var ItemsViewModel = require( 'brjstodo/todo/items/ItemsViewModel' );

var KnockoutComponent = require( 'br/knockout/KnockoutComponent' );

var App = function() {
debugger;  
  var inputViewModel = new InputViewModel();
  var inputComponent =
    new KnockoutComponent( 'brjstodo.todo.input.view-template', inputViewModel );

  var itemsViewModel = new ItemsViewModel();
  var itemsComponent =
    new KnockoutComponent( 'brjstodo.todo.items.view-template', itemsViewModel );

  var todoAppEl = document.getElementById( 'todoapp' );
  todoAppEl.appendChild( inputComponent.getElement() );
  todoAppEl.appendChild( itemsComponent.getElement() );    
};

module.exports = App;