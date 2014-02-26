var InputViewModelTest = TestCase( 'InputTest' );

var InputViewModel = require( 'brjstodo/todo/input/InputViewModel' );

InputViewModelTest.prototype.testSomething = function() {
  var model = new InputViewModel();
  assertEquals( '', model.todoText() );
};