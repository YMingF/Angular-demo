angular.module('myApp', [])
  .controller('ctrl1', ['$scope', function ($scope) {
    $scope.content = ''
    $scope.number = 100
    $scope.Function = {
      saveContent() {
        window.alert('data has been saved')
        window.localStorage.setItem('Content', JSON.stringify($scope.content))
        $scope.content = ''
      },
      fetchContent() {
        $scope.content = JSON.parse(window.localStorage.getItem('Content') || '[]')
      },
      contentDel() {
        $scope.content = $scope.content.slice(0, -1)
      },
      getNumber() {
        if ($scope.content.length > 100) {
          $scope.content = $scope.content.slice(0, 100)
          return window.alert('已到最大字数限制')
        }
        return 100 - $scope.content.length
      }
    }
  }])
