""

angular.module('app', [])
    .controller('gitHubDataController', ['$scope','$http', function($scope,$http) {

        $scope.reposLoaded = false;

        $scope.userLoaded = false;

        $scope.username = "spacetexan";

        $http.get("https://api.github.com/users/" + $scope.username)
            .success(function (data) {
                $scope.userData = data;
                loadRepos();
            });

        $http.get("https://api.github.com/repos/" + $scope.username + "/tripviewer/commits?since=2016-02-16T01:52:05Z")
            .success(function (data) {
                $scope.commitData = data;
               console.log('commit data');
              console.log(data);
            });

        $http.get("https://api.github.com/repos/" + $scope.username + "/tripviewer/pulls" )
            .success(function (data) {
                $scope.pullData = data;
                console.log('pull data');

                console.log(data);
            });


        var loadRepos = function () {
            $http.get($scope.userData.repos_url)
                .success(function (data) {
                    $scope.repoData = data;
                 });
        };






        $scope.predicate = '-updated_at';


}]);

