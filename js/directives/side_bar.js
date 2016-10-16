// 'Smart' component. Holds state.

app.controller('SideBarCtrl', function () {
  var vm = this;

  vm.editAllState = false;

  vm.toggleEditAll = function () {
    vm.editAllState = !vm.editAllState;
  };
});

app.directive('sideBar', function () {
  return {
    controller: 'SideBarCtrl',
    controllerAs: 'vm',
    restrict: 'E',
    scope: {},
    templateUrl: 'js/templates/side_bar.html'
  };
});
