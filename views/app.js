// console.log("app.js functioning")
const app = angular.module('british_pub', []);

app.controller('mainController', ['$http', function($http) {

  // console.log("The angular module is functioning.")

  this.menuDropOpen      = false;
  this.newsDropOpen      = false;
  this.drinksDropOpen    = false;
  this.totalMenuDropOpen = false;
  this.whereDropOpen     = false;
  // this.historyDropOpen   = false;
  this.contactsDropOpen  = false;

  this.starterCategoryDrop    = false;
  this.favoriteCategoryDrop = false;
  this.dessertCategoryDrop = false;

  this.openAndCloseMenu = () => {
    this.menuDropOpen = ! this.menuDropOpen;
  }

  this.allFalse = () => {
    this.newsDropOpen = false;
    this.drinksDropOpen = false;
    this.totalMenuDropOpen = false;
    this.whereDropOpen = false;
    // this.historyDropOpen = false;
    this.contactsDropOpen = false;
  }

  this.newsBox = () => {
    this.newsDropOpen = ! this.newsDropOpen;
  }

  this.drinksBox = () => {
    this.drinksDropOpen = ! this.drinksDropOpen;
  }

  this.totalMenuBox = () => {
    this.totalMenuDropOpen = ! this.totalMenuDropOpen;
  }

  this.whereBox = () => {
    this.whereDropOpen = ! this.whereDropOpen;
  }

  // this.historyBox = () => {
  //   this.historyDropOpen = ! this.historyDropOpen;
  // }

  this.contactsBox = () => {
    this.contactsDropOpen = ! this.contactsDropOpen;
  }

  this.allCategoryFalse = () => {
    this.favoriteCategoryDrop = false;
    this.starterCategoryDrop  = false;
    this.dessertCategoryDrop  = false;
  }

  this.openFavorite = () =>{
    this.favoriteCategoryDrop = ! this.favoriteCategoryDrop;
  }

  this.openStarter = () => {
    this.starterCategoryDrop = ! this.starterCategoryDrop;
  }

  this.openDessertOpen = () => {
    this.dessertCategoryDrop = ! this.dessertCategoryDrop
  }

}]);
