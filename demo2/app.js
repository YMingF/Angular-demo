angular.module('myApp', [])
  .controller('ctrl2', ['$scope', function ($scope) {
    $scope.newTodo = ''
    $scope.todos = [
      {name: '吃饭', isChecked: false},
      {name: '睡觉', isChecked: false},
      {name: '打豆豆', isChecked: false},
    ]
    $scope.add = function (e) {
      if (!$scope.newTodo) {return window.alert('输入内容不能为空')}
      $scope.todos.unshift({
        name: $scope.newTodo,
        isChecked: false
      })
      $scope.newTodo = ''
    }
    $scope.contentDel = function () {
      $scope.todos = $scope.todos.filter((t) => t.isChecked === false)
    }
  }])
