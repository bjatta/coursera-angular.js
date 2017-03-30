(function (){
	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyController', ToBuyController)
		.controller('BoughtController', BoughtController)
		.factory('ShoppingListFactory', ShoppingListFactory);

	ToBuyController.$inject  = ['ShoppingListFactory'];
	function ToBuyController(ShoppingListFactory){
		var list1 = this;
		var toBuyList = ShoppingListFactory(10);

		toBuyList.addItem('Pepto Bismol','10 bottles');
		toBuyList.addItem('Pepto Bismol Original','11 bottles');
		toBuyList.addItem('Pepto Bismol Cherry','12 bottles');
		toBuyList.addItem('Cherry Pepto Max','14 bottles');
		toBuyList.addItem('Cherry Pepto Max','14 bottles');
		toBuyList.addItem('Pepto Bismol','10 bottles');
		toBuyList.addItem('Pepto Bismol Original','11 bottles');
		toBuyList.addItem('Pepto Bismol Cherry','12 bottles');
		toBuyList.addItem('Cherry Pepto Max','14 bottles');
		toBuyList.addItem('Cherry Pepto Max','14 bottles');

		try {
			toBuyList.addItem('not will be shown','any times');
    	} catch (error) {
      			list1.errorMessage = error.message;
    }
		list1.items = toBuyList.getItems();
	  	list1.buyItem = function (itemIndex) {
	    	toBuyList.removeItem(itemIndex);
	  	};
	}

	BoughtController.$inject = ['ShoppingListFactory'];
	function BoughtController(ShoppingListFactory){
		var list2 = this;
		var boughtList = ShoppingListFactory();

		list2.items = boughtList.getItems();
		list2.addItem = function (itemName,itemQuantity) {
			boughtList.addItem(itemName,itemQuantity);
		}
	}

	function ShoppingListService(itemsQuantity) {
	  var service = this;
	  var items = [];
	  service.addItem = function (itemName, itemQuantity) {
	    if ((itemsQuantity === undefined) ||
	        (itemsQuantity !== undefined) && (items.length < itemsQuantity)) {
	      var item = {
	        item_quantity: itemQuantity,
	        item_name: itemName
	      };
	      items.push(item);
	    }
	    else {
	      throw new Error("Max items (" + itemsQuantity + ") reached.");
	    }
	  };

	  service.removeItem = function (itemIndex) {
	    items.splice(itemIndex, 1);
	  };
	  service.getItems = function () {
	    return items;
	  };
	}

	function ShoppingListFactory() {
	  var factory = function (itemsQuantity) {
	    return new ShoppingListService(itemsQuantity);
	  };
	  return factory;
	}
}
)();