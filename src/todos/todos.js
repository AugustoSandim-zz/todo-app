import _ from 'lodash';

export default function($scope, todoFactory) {
  
  let params = {
    createHasInput: false
  };
  
  $scope.todos = [
    {task: 'do dishes', isCompleted: false, isEditing: false },
    {task: 'do dishes other', isCompleted: true, isEditing: false }
  ];

  $scope.onCompletedClick = (todo) => {
    todo.isCompleted = !todo.isCompleted;
  }; 

  $scope.onCancelClick = (todo) => {
    todo.isEditing = false;
  }

  $scope.createTask = _.partial(todoFactory.createTask, $scope, params);
  
  $scope.updateTask = _.partial(todoFactory.updateTask);

  $scope.deleteTask = _.partial(todoFactory.deleteTask, $scope);

  $scope.onEditClick = (todo) => {
    todo.task = todo.updatedTask;
    todo.isEditing = false;
  };

  $scope.$watch('createTaskInput', _.partial(todoFactory.watchCreateTaskInput, params, $scope));
}