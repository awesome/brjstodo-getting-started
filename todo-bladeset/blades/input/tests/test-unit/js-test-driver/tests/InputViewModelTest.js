var InputViewModelTest = TestCase( 'InputViewModelTest' );

var ServiceRegistry = require( 'br/ServiceRegistry' );

var fakeEventHub;
var fakeChannel;

InputViewModelTest.prototype.setUp = function() {

  fakeChannel = {
    trigger: function( eventName, data ) {
      // store event name and data
      this.eventName = eventName;
      this.data = data;
    }
  };

  fakeEventHub = {
    channel: function( channelName ) {
      // store the name of the channel
      this.channelName = channelName;
      return fakeChannel;
    }
  };

  // ensure there isn't already an event-hub registered
  ServiceRegistry.deregisterService( 'br.event-hub' );

  // Register the fake event hub
  ServiceRegistry.registerService( 'br.event-hub', fakeEventHub );
};

var InputViewModel = require( 'brjstodo/todo/input/InputViewModel' );

InputViewModelTest.prototype.testSomething = function() {
  var model = new InputViewModel();
  assertEquals( '', model.todoText() );
};

InputViewModelTest.prototype.testEnterKeyPressedTriggersEventOnEventHub = function() {
  // Initialize
  var testTodoTextValue = 'write some code and test it';
  var inputViewModel = new InputViewModel();
  inputViewModel.todoText( testTodoTextValue );

  // Execute test
  inputViewModel.keyPressed( null, { keyCode: 13 } );

  // Verify
  assertEquals( 'todo-list', fakeEventHub.channelName );
  assertEquals( 'todo-added', fakeChannel.eventName );
  assertEquals( testTodoTextValue, fakeChannel.data.title );
};