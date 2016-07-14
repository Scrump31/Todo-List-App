todoListApp.controller('MainCtrl', ['$scope', function($scope) {
  $scope.todoList = [];
  $scope.newtask = function() {
    $scope.todoList.push({done:false});
    $scope.todoInput = "";
  };
}]);
