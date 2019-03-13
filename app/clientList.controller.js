var app = angular.module('ToDo', [])
    .controller('listPersonCtrl', function ($scope) {
        $scope.currentPersonId = -1;
        $scope.listPerson = [
            {
                name: 'Зверев Сергей Анатольевич',
                phone: '8-903-254-11-11',
                email: 'sega_zver@mail.ru'
            }
        ];
        cleanTextBox = function () {
            $scope.name = '';
            $scope.phone = '';
            $scope.email = '';
        }
        $scope.onAddNewPerson = function () {
            if ($scope.name !== null && $scope.name !== '') {
                $scope.listPerson.push({
                    name: $scope.name,
                    phone: $scope.phone,
                    email: $scope.email
                });
                cleanTextBox();
            }
        }
        $scope.onSavePerson = function () {
            if ($scope.currentPersonId > -1) {
                var id = $scope.currentPersonId;
                $scope.listPerson[id].name = $scope.name;
                $scope.listPerson[id].phone = $scope.phone;
                $scope.listPerson[id].email = $scope.email;
                cleanTextBox();
                $scope.currentPersonId = -1;
            }
        }
        $scope.editPerson = function (id) {
            $scope.currentPersonId = id;
            $scope.name = $scope.listPerson[id].name;
            $scope.phone = $scope.listPerson[id].phone;
            $scope.email = $scope.listPerson[id].email;
        }
        $scope.deletePerson = function (id) {
            $scope.listPerson.splice(id, 1);
        }
        $scope.sortField = undefined;
        $scope.reverse = false;
        $scope.sort = function (fieldName) {
            if ($scope.sortField === fieldName) {
                $scope.reverse = !$scope.reverse;
            } else {
                $scope.sortField = fieldName;
                $scope.reverse = false;
            }
        }
    })
    .directive('tablePersonList', function ($compile) {

        return {
            templateUrl: 'clientList.template.html',
            controller: 'listPersonCtrl'
        };
    }); 