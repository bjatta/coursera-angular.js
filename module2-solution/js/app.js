(function (){
	'use strict';
	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyController', ToBuyController)
		.controller('BoughtController', BoughtController)
		.service('ShoppingListService', ShoppingListService);

	ToBuyController.$inject  = ['ShoppingListService'];
	function ToBuyController(ShoppingListService){
		var list1 = this;

		list1.items = ShoppingListService.getItems();
	  	list1.buyItem = function (itemIndex) {
	    	ShoppingListService.buyItem(itemIndex);
	  	};
	}

	BoughtController.$inject = ['ShoppingListService'];
	function BoughtController(ShoppingListService){
		var list2 = this;
		list2.items = ShoppingListService.getBoughtItems();
	}

	function ShoppingListService() {
	  var service = this;
	  var items = [
	  		{item_name:'Pepto Bismol',
	  			item_quantity:'10 bottles'},
	  		{item_name:'Pepto Bismol Original',
	  			item_quantity:'11 bottles'},
	  		{item_name:'Pepto Bismol Cherry',
	  			item_quantity:'12 bottles'},
	  		{item_name:'Cherry Pepto Max',
	  			item_quantity:'14 bottles'},
	  		{item_name:'Cookie',
	  			item_quantity:'16 bags'},
	  		{item_name:'ChokoPie',
	  			item_quantity:'2 bags'},
	  		{item_name:'Lime',
	  			item_quantity:'10 pcs.'},
	  		{item_name:'Orange',
	  			item_quantity:'1.5 pound'},
	  		{item_name:'0.3 pepsi',
	  			item_quantity:'2 bottles'},
	  		{item_name:'Sprite',
	  			item_quantity:'1 glass'}
			];
	  var boughtItems = [];

	  service.buyItem = function (itemIndex) {
	    boughtItems.push(items.splice(itemIndex, 1)[0]);
	  };
	  service.getItems = function () {
	    return items;
	  };
	  service.getBoughtItems = function () {
	    return boughtItems;
	  };
	}
}
)();