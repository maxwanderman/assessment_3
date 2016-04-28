var app = angular.module('testApp', []);

app.controller('SuperController',['$http', function($http){
    var vm = this;

    vm.superdata = {};
    vm.superheroes =[];

    vm.fetchSuperheroes = function() {
      $http.get('/fetch').then(function(response){
        console.log(response);
        vm.superheroes= response.data;
  });
};

    vm.sendData = function(){
      $http.post('/create', vm.superdata).then(function(response){
        console.log(response);
        vm.superdata = {};
        vm.fetchSuperheroes();
  });
};
    vm.remove = function(){
      $http.delete('/remove').then(function(response){
        console.log(response);
        vm.fetchSuperheroes();
      });
    };
vm.fetchSuperheroes();
  }]);
