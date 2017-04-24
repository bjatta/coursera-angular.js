(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);


MenuAppController.$inject = ['MenuAppService', 'items'];
function MenuAppController(MenuAppService, items) {
  var mainlist = this;
  mainlist.category = items.data.category ? items.data.category.short_name : 'ALL';
  mainlist.items = items.data.menu_items || items.data;
  mainlist.menuItems = (itemID) => {}
}

})();
