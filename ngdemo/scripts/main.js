var mytodo = angular.module('todoApp', []);

mytodo.controller('myController',['$scope', function($scope){
  $scope.test = 'hello';

  $scope.todos = 
  [
    {text: 'todo1', done: true},
    {text: 'todo2', done: false},
    {text: 'todo3', done: true}
  ];

  $scope.addTodo = function(){
    if( !$scope.newTodo ){
      return ;
    }

    $scope.todos.push({
      text : $scope.newTodo,
      done : false
    });
    $scope.newTodo = '';
  };

  $scope.remaining = function(){
    var num = 0;
    angular.forEach($scope.todos, function(entry){
      num += entry.done ? 0 : 1;
    });
    return num;
  };

}])
.directive('myButton',function(){
  return {
    link : function linkFn(scope, element, attrs) {
      console.log(element);
      var ele = element[0];
      ele.onclick = function(){
        console.log('diective');
      }

      angular.element(ele).addClass('dirButton');
    }
  };
})
;



