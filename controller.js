 routerApp.controller('homeControllerList',
  function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
 );
 
 routerApp.controller('scotchController', function($scope, $rootScope) {
 
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 142',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});
routerApp.controller('servicesController',
function($scope, $http) {
  
    $http.get("https://www.w3schools.com/angular/customers.php").then(function(response) {
        console.log('response', response.data.records )
        $scope.myData = response.data.records;
      },function(response) {
        // Second function handles error
        $scope.content = "Something went wrong";
      });
    $scope.title = "Our Services";
            
          }
);

