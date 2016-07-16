todoListApp.controller('MainCtrl', ['$scope', function($scope) {
  $scope.editing = true;
  $scope.todoList = [];
  $scope.newtask = function() {
    $scope.todoList.push({done:false});
  };
  $scope.remove = function() {
       var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
}]);
