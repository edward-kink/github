function Ctrl($scope) {
  $scope.items = [{'type' : 'settings'}, {'type':'home'}, {'type':'other'}];
  $scope.selection = $scope.items[0];
  
  $scope.options = [
    {'title' : 'Title1', 'label' : 'Zip code', 'type' : 'xxx' },
    {'title' : 'Title2', 'label' : 'MD', 'type' : 'title1'},
    {'title' : 'Title3', 'label' : 'DMS', 'type' : 'title2'}
];
  
  $scope.test = '';
  $scope.searchType = $scope.options[0];
  
  $scope.selectSearchType = function(op){
    $scope.searchType = op;
  };
  
  $scope.actionme = function(){
    console.log('value is:' + $scope.test);
    //alert($scope.test);
  };
}
