(function () {
'use strict';

angular.module('MenuApp')
.service('MenuAppService', MenuAppService);

MenuAppService.$inject = ['$http','$stateParams']
function MenuAppService($http,$stateParams) {
  var service = this;

  service.getItems = function (category) {
      console.log($stateParams.category);
      category = category || 'L';
      var response = $http({
          method: "GET",
          url: (' https://davids-restaurant.herokuapp.com/menu_items.json?category='+category),
      });
      return response;
  };

  service.getCategory = () => {
      var response = $http({
          method: "GET",
          url: ('https://davids-restaurant.herokuapp.com/categories.json'),
      });
      return response;
  }
}
})();
