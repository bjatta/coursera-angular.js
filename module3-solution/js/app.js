(function (){
	'use strict';
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.service('MenuService', MenuService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
	.directive('foundItems', foundItemsDirective)
	.directive('itemsLoaderIndicator', itemsLoaderIndicatorDirective);

	function itemsLoaderIndicatorDirective(){
		var ddo = {
	    	templateUrl: 'loader/itemsloaderindicator.template.html',
			scope: {
				items: '<',
			},
			controller: itemsLoaderIndicatorDirectiveController,
			controllerAs: 'loader',
			bindToController: true
		};
		return ddo;
	}

	function itemsLoaderIndicatorDirectiveController(){
	}

	function foundItemsDirective() {
	  var ddo = {
	    templateUrl: 'loader/foundItems.template.html',
			scope: {
				onRemove: '&',
				items: '<',
				myTitle: '@title',
				onShow :  '&',
			},
			controller: foundItemsDirectiveController,
			controllerAs: 'foundItems',
			bindToController: true
	  };
	  return ddo;
	}

	function foundItemsDirectiveController(){
		var menu = this;
		var foundItems = this;
	}

	MenuService.$inject=['$http','ApiBasePath'];
	function MenuService ($http, ApiBasePath){
		var service = this;

		service.getMenu = function () {
			var response = $http({
				method: "GET",
	    		url: (ApiBasePath + "/menu_items.json"),
	    		});
	    	return response;
		};		
	}

	MenuSearchService.$inject=['MenuService'];
	function MenuSearchService(MenuService){
		var service = this;
		var menu = [];
		var found = [];
		var removed = [];
		var promise = MenuService.getMenu();
  		
  		promise.then(function (response) {
    		menu = response.data.menu_items;
    	});

		service.getMatchedMenuItems = function (matchingString) {
			found =[];
			if (!matchingString) {
				menu.forEach(function(el){
					found.push(el);});
				return found;
			}

			menu.forEach(function(el){
				if ((el.name.toLowerCase().indexOf(matchingString.toLowerCase())+1)||
					(el.description.toLowerCase().indexOf(matchingString.toLowerCase())+1)) found.push(el);
			});
			return found;
		}

		service.getItemDecsription = function (index){
			if ((index === undefined) || !menu.length || index > menu.length) return ' - ';
			return menu[index];
		}

		service.removeItem = function (itemIndex) {
			removed.push(found.splice(itemIndex, 1)[0]);
		};
	}

	NarrowItDownController.$inject =['MenuSearchService'];
	function NarrowItDownController (MenuSearchService){
		var menu = this;
		menu.items = MenuSearchService.getMatchedMenuItems();
		menu.ci = 0;


		menu.getItems = function (){
			menu.ci = 0;
			menu.items = MenuSearchService.getMatchedMenuItems(menu.searchString);
		}

		menu.showDescription = function (itemIndex) {
			menu.ci = 0;
			menu.ci = MenuSearchService.getItemDecsription(itemIndex);
		}

		menu.removeItem = function (itemIndex) {
			menu.ci = 0;
			MenuSearchService.removeItem(itemIndex);
		}
	}
}
)();