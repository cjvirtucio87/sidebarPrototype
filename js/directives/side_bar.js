// 'Smart' component. Holds state.
app.controller('SideBarCtrl', ['$rootScope', function ($rootScope) {
  var vm = this;

  vm.editStates = {
    section: false
  };

  vm.toggle = function (stateObj) {
    vm.editStates[stateObj.type] = stateObj.bool;
    // Pass editStates obj to master controller.
    $rootScope.$emit('sidebar.toggled', vm.editStates);
  };
}]);

app.directive('sideBar', function () {
  return {
    controller: 'SideBarCtrl',
    controllerAs: 'vm',
    restrict: 'E',
    scope: {},
    templateUrl: 'js/templates/side_bar.html'
  };
});
