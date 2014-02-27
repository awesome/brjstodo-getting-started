var ItemsViewModelTest = TestCase( 'ItemsViewModelTest' );

var ServiceRegistry = require( 'br/ServiceRegistry' );

var fakeEventHub;
var fakeChannel;

ItemsViewModelTest.prototype.setUp = function() {

  fakeChannel = {
    on: function(eventName, callback, context) {
      // store event name and data
      this.eventName = eventName;
      this.callback = callback;
      this.context = context;
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

var ItemsViewModel = require( 'brjstodo/todo/items/ItemsViewModel' );

ItemsViewModelTest.prototype.testitemsBladeListensToItemAddedEvents = function() {
  var itemsViewModel = new ItemsViewModel();

  assertEquals( fakeEventHub.channelName , 'todo-list' );
  assertEquals( fakeChannel.eventName , 'todo-added' );
  assertEquals( fakeChannel.context , itemsViewModel );
};

ItemsViewModelTest.prototype.testItemsViewModelAddsItemOnTodoAddedEvent = function() {
  var itemsViewModel = new ItemsViewModel();

  var itemText = 'hello';

  // trigger the callback
  fakeChannel.callback.call( fakeChannel.context, { title: itemText } );

  // check the item has been added to the end of the list
  var items = itemsViewModel.todos();
  assertEquals( itemText, items[ items.length - 1 ].title );
};
