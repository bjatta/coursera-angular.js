/**
 * Created by Bjatta on 30.04.2017 at 22:50.
 */
;(()=>{
"use strict";
angular.module('public')
.controller('MyInfoController',MyInfoController);

MyInfoController.$inject = ['ApiPath','MenuService'];

function MyInfoController(ApiPath,MenuService) {
    let $ctrl = this;

    $ctrl.basePath = ApiPath;
    $ctrl.user = MenuService.getUserInfo();
    console.log($ctrl.user);
};
})();