(function () {
'use strict';
angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);
ItemDetailController.$inject = ['$stateParams', 'items'];
function ItemDetailController($stateParams, items) {
  var itemDetail = this;
  var item = items.data.menu_items[$stateParams.itemId];
  itemDetail.name = item.name;
  itemDetail.price = item.price_large;
  itemDetail.description = item.description;
}
})();
