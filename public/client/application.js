var easyDonations=angular.module('easyDonations',['ngRoute','ngResource','ui.bootstrap', 'ngStorage']).run(function($rootScope,$http, $sessionStorage) {   
 //   console.log($sessionStorage.user);
    
    if($sessionStorage.user == undefined){
        $rootScope.authenticated = false;
        $rootScope.user = {current_user: '', authenticated: false};
    }else{
        $rootScope.authenticated = $sessionStorage.user.authenticated;
        $rootScope.user = $sessionStorage.user;
         $rootScope.role=$sessionStorage.user.role;
    }
    //console.log($sessionStorage.user);
    
    $rootScope.signout = function(){
        console.log("Signout");
        $http.get('auth/signout');
    	$rootScope.user.authenticated = false;
    	$rootScope.user.current_user = '';
        $rootScope.user.role = '';
        $rootScope.user._id = '';
        $sessionStorage.user = $rootScope.user;        
        console.log($sessionStorage.user); 
        $rootScope.authenticated = $sessionStorage.user.authenticated;
	};
});