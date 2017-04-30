/**
 * Created by Bjatta on 30.04.2017 at 22:50.
 */
;(()=>{
"use strict";
angular.module('public')
.controller('MyInfoController',MyInfoController);

MyInfoController.$inject = ['$rootScope'];
function MyInfoController($rootScope) {
    let $ctrl = this;

    if ($rootScope.user) {
        $ctrl.user = $rootScope.user || {};
        $ctrl.user.firstName = $rootScope.user.firstName;
        $ctrl.user.lastName = $rootScope.user.lastName;
        $ctrl.user.favoratedDish = $rootScope.user.favoratedDish;
        $ctrl.user.email = $rootScope.user.email;
    }
};
})();