(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html',
    controller: 'MenuAppController as mainList',
    resolve: {
        items: ['MenuAppService', function (MenuAppService) {
            return MenuAppService.getCategory();
        }]
    }
  })
  .state('menuList', {
    url: '/menu-list/{category}',
    templateUrl: 'src/menu/templates/main-menuList.template.html',
    controller: 'MenuAppController as mainList',
    resolve: {
      items: ['MenuAppService', function (MenuAppService) {
        return MenuAppService.getItems();
      }]
    }
  })
  .state('menuList.itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/menu/templates/item-detail.template.html',
    controller: "ItemDetailController as itemDetail"
  });
}
})();
