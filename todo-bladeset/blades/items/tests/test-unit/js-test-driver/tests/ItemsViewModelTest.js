var ItemsViewModelTest = TestCase( 'ItemsTest' );

var ItemsViewModel = require( 'brjstodo/todo/items/ItemsViewModel' );

ItemsViewModelTest.prototype.testSomething = function() {
  var model = new ItemsViewModel();
  assertEquals( 'Hello World!', model.message() );
};
