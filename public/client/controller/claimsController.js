var easyDonations=angular.module('easyDonations');

easyDonations.controller('claimsController',['$scope','$http','$sessionStorage','donationFactory','$rootScope', function($scope, $http, $sessionStorage,donationFactory,$rootScope){
    
    console.log('claims contlr');
    
    $scope.posts='';
  //  $scope.orphanageDetails = [];
    
    $scope.claims=[];
    
//    $scope.postId = '';
  //  $scope.orphanage = '';
    $scope.current_user_name='';
   // console.log( $scope.orphanageDetails[0]);
    
    if($sessionStorage.user){
		// Only if Session is Set

		$scope.current_user_name = $sessionStorage.user.current_user;
	}
    
    getOrphanageById();
     function getOrphanageById(){
        donationFactory.getOrphanageById($sessionStorage.user.current_user).then(function(response){
            $scope.orphanage=response.data;
            console.log("Orphanage object");
            console.log(response);
          },function(error){
            console.log("Couldnot get orphanage data");});
    };


    /*function getDetails(){
        angular.forEach($scope.claims, function(value, key){
          $http.get('/api/orphanages/' + value).then(function(response){
              
              var orphanage = {};
              
              orphanage = response.data;
              //orphanage.no_of_people = response.data.no_of_people;
              
              $scope.orphanageDetails.push(orphanage);
              
              console.log($scope.orphanageDetails);
              
          });
       });
    };*/
    
     $scope.PageSize=5;
    $scope.currentPage=1;
    $scope.showPosts=false;

    $scope.viewClaims=function(){
         if($scope.claims.length>0){
                    $scope.showPosts=true;
                }
    }

   function getClaims(){

    //    console.log(JSON.stringify($scope.posts));

       for (var i in $scope.posts){
        var temp= new Array();;
           temp=JSON.stringify($scope.posts[i].claims);

           console.log(temp);
           if(temp.length>0){
               console.log("insd ifs=")
                if(temp.includes($scope.current_user_name)){
                $scope.claims.push($scope.posts[i]);

            }
           }

       }

    };
    
    getAllposts();
    function getAllposts(){

        donationFactory.getPosts().then(function (response){
            $scope.posts = response.data;

        getClaims();

        }, function (error) {
            console.log("Could not get data");
        });
    }

}]);
