/**
 * Created by Bjatta on 30.04.2017 at 22:50.
 */
;(()=>{
"use strict";
angular.module('public')
.controller('StudentController',StudentController);

StudentController.$inject = ['$scope','$rootScope','MenuService'];
function StudentController($scope,$rootScope,MenuService) {
    let $ctrl = $rootScope;

    $scope.reset = function(){
        $scope.firstName = "no-name";
        $scope.lastName = "no-family";
        $scope.favoratedDish = "A1";
        $scope.email = "empty@email.null";
    };

    if ($ctrl.user) {
        $scope.firstName = $ctrl.user.firstName;
        $scope.lastName = $ctrl.user.lastName;
        $scope.favoratedDish = $ctrl.user.favoratedDish;
        $scope.email = $ctrl.user.email;
    }else $scope.reset();

    $scope.submit = function () {
        if ($scope.ctrl.$valid) {
            $ctrl.user = {};
            $ctrl.user.firstName = $scope.firstName;
            $ctrl.user.lastName = $scope.lastName;
            $ctrl.user.favoratedDish = $scope.favoratedDish;
            $ctrl.user.email = $scope.email;
            console.log($scope);
        }
    }
    SignUpController.$inject = ['MenuService'];
    function SignUpController(MenuService) {
        var $signUpCtrl = this;

        $signUpCtrl.submit = function() {
            MenuService.getFavoriteDish($signUpCtrl.user.favoriteDish).then(function (response) {
                $signUpCtrl.user.favDish = response.data;
                MenuService.setUserProfile($signUpCtrl.user);
                $signUpCtrl.success = true;
                $signUpCtrl.error = false;

            }, function (response) {
                $signUpCtrl.success = false;
                $signUpCtrl.error = true;
            });
        };
};
})();
