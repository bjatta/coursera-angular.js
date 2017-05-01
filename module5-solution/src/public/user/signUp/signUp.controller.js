/**
 * Created by Bjatta on 30.04.2017 at 22:50.
 */
;(()=>{
"use strict";
angular.module('public')
.controller('SignUpController',SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
    var $ctrl = this;
    $ctrl.user= MenuService.getUserInfo() || {
            firstName:'John',
            lastName:'Doe',
            email:'John@Doe.sky',
            phone:'555-222-7777',
            favoratedDish:'SP4',
        };
    if (!$ctrl.user.firstName)
        $ctrl.user = {
            firstName:'Jonh',
            lastName:'Doe',
            email:'John@Doe.sky',
            phone:'555-222-7777',
            favoratedDish:'SP4',
        };
    console.log($ctrl.user);
    $ctrl.submit = function() {
        MenuService.getMenuItemsByShortNames($ctrl.user.favoratedDish).then(function (response) {
            $ctrl.user.dish = response.data;
            MenuService.setUserInfo($ctrl.user);
            $ctrl.success = true;
            $ctrl.error = false;
        }, function (response) {
            MenuService.setUserInfo({});
            console.log('error');
            $ctrl.success = false;
            $ctrl.error = true;
        });
    };

    $ctrl.reset = function () {
        $ctrl.user={};
    }
};
})();
