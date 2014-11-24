(function (angular, _) {
    'use strict';

    angular.module('connect-grid-rest-connector').directive('connectGridRestConnector', [function () {



        return {
            restrict: 'A',
            compile: function () {
                return {
                    pre: function (scope, element, attrs) {
                        var options = scope.$eval(attrs.connectGridRestConnector);
                        var Resource = options.Resource;

                        if (!Resource) {
                            return;
                        }


                    },
                    post: function () {
                        console.log('post');
                    }
                }
            }
        };

    }]);
})(window.angular, window._);