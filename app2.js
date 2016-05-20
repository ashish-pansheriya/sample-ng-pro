(function() {
var app = angular.module('app', ['ngAnimate', 'ngRoute']);

app.config(function($locationProvider, $routeProvider){
 $locationProvider.hashPrefix("!");
        $locationProvider.html5Mode(false);
	$routeProvider	.when('/HOME',{
templateUrl : 'HOME.html',
controller :	'homeController'
})

});

app.controller('homeController', function($scope){
$scope.message = "HOMEhomeHOME"
});

app.filter('customCurrency',function(){ return function(input, symbol, place){
    if(input < 999){
input = input + '000000';}
      return input;
    } 
})

app.directive('selectLast', function () {
        return function (scope, element, attrs, input) {
           
            if (scope.$last=== true) {
                console.log("the last element is here");
            }
        }
    });

app.controller('mainCtrl', function($scope){
$scope.name = '';
    $scope.items = [];
    $scope.lineammount = '';
    $scope.outstanding = '';
    $scope.transaction = '';
    $scope.details = '';

    $scope.add = function(){
        $scope.items.push($scope.lineammount,$scope.outstanding,$scope.transaction, $scope.details);
}
});


app.controller('otherCtrl',function(){
this.banks1 = bankdata;


});

		var mydata = [

		{name:'Ashish' , price: '100.00'},

		];

var bankdata = [ 
{name:'	ABCD	',phone	:'	1234	'}];

})();
