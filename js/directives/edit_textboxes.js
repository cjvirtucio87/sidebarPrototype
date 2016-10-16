app.directive('editTextboxes', function () {
  return {
    restrict: 'E',
    scope: {
      edit: '<',
      onToggle: '&'
    },
    templateUrl: 'js/templates/edit_textboxes.html',
    link: function (scope) {
      scope.toggleTextboxState = function () {
        var stateObj = {
          type: 'textbox',
          bool: !scope.edit
        };
        scope.onToggle({stateObj: stateObj});
      };
    }
  };
});
