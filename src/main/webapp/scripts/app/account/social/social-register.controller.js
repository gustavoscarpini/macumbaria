'use strict';

angular.module('macumbariaApp')
    .controller('SocialRegisterController', function ($scope, $filter, $stateParams) {
        $scope.provider = $stateParams.provider;
        $scope.providerLabel = $filter('capitalize')($scope.provider);
        $scope.success = $stateParams.success;
        $scope.error = !$scope.success;
    });
