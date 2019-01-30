routerApp.controller('contactsController',
function($scope, $rootScope) {
    $rootScope.$on('$stateChangeSuccess', function () {
        $("html, body").animate({scrollTop: 0}, 0);
    });
 

    $scope.title = "Contacts";
            
          }
);