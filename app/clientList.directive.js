var myapp = angular.module('ToDo', [])
  .controller('fiddleCtrl', ['$scope', function ($scope) {
    
    $scope.personList = [{
      fio: 'Петров Петр Петрович',
      number: '1-232-234',
      image: 'img/1.jpg'
    }, {
      fio: 'Иванов Иван Иванович',
      number: '1-234-234',
      image: 'img/3.jpg'
    }, {
      fio: 'БорисовБорис Борисович',
      number: '1-555-234',
      image: 'img/6.jpg'
    }, {
      fio: 'Семенов Семен Семенович',
      number: '1-232-254',
      image: 'img/7.jpg'
    }, {
      fio: 'Александрова Александра Александровна',
      number: '2-002-234',
      image: 'img/8.jpg'
    }, {
      fio: 'Кузьмин Кузьма Кузьмич',
      number: '7-231-234',
      image: 'img/4.jpg'
    }
    ];
  }])
  .directive('trRow', function ($compile) {

    return {
      template: '<tr><td ng-bind="row.fio"></td><td><strong ng-bind="row.number"></strong></td><td><img ng-src ="{{row.image}}" height = "100"/></td></tr>'
    };
  })
  .directive('tablePersonList', function ($compile) {

    return {
      templateUrl: 'clientList.template.html',
      controller:'fiddleCtrl'
    };
  })
  .controller('showCtrl', ['$scope', function ($scope) {
    $scope.isShow = false;
    function onHide() {
        isShow = !isShow;
    }
}]);
