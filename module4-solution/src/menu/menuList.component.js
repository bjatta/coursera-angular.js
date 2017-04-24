(()=>{
'use strict';
angular.module('MenuApp')
.component('menuList', {
  templateUrl: 'src/menu/templates/menuList.template.html',
  bindings: {
    items: '<',
    category: '<'
  }
});
})();