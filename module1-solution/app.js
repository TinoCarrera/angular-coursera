(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchMenu = '';

  $scope.checkMenu = function () {
    let number = calculateNumber($scope.lunchMenu);

    if (number == 0) {
      $scope.message = 'Please enter data first';
    } else if (number == -1) {
      $scope.message = 'There is an empty item';
    }
     else if (number <= 3) {
      $scope.message = 'Enjoy!';
    } else {
      $scope.message = 'Too much!';
    }
  };

  function calculateNumber(menu) {
    if (menu == '') {
      return 0;
    }
    let words = menu.split(',');
    for (let word of words) {
      let trim = word.trim();
      if (trim == '') {
        return -1;
      }
    }
    return words.length;
  }
}

})();
