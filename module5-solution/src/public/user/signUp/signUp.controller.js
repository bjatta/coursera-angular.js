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
            firstName:'Jonh',
            lastName:'Doe',
            email:'John@Doe.sky',
            phone:'555-222-777',
            favoratedDish:'SP4',
        };
    console.log($ctrl.user);
    $ctrl.submit = function() {
        console.log('on submit:',$ctrl.user);
        MenuService.getMenuItemsByShortNames($ctrl.user.favoratedDish).then(function (response) {
            $ctrl.user.dish = response.data;
            MenuService.setUserInfo($ctrl.user);
            $ctrl.success = true;
            $ctrl.error = false;
        }, function (response) {
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
