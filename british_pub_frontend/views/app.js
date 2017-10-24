// console.log("app.js functioning")
const app = angular.module('british_pub', []);

app.controller('mainController', ['$http', function($http) {

  // console.log("The angular module is functioning.")

  this.menuDropOpen = false;

  this.openAndCloseMenu = () => {
    this.menuDropOpen = ! this.menuDropOpen;
  }

}]);
