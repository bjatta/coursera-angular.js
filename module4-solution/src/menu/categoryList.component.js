(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/menu/templates/categoryList.template.html',
  bindings: {
    items: '<'
  }
});

})();
