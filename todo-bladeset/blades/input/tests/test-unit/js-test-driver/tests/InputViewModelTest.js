var InputViewModelTest = TestCase("InputTest");

var InputViewModel = require( 'brjstodo/todo/input/InputViewModel' );

InputTest.prototype.testSomething = function() {
  var model = new InputViewModel();
  assertEquals( 'Hello World!', model.message.getValue() );
};
