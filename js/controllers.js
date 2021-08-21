angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    document.getElementById('usuarioLogado').innerHTML=localStorage.getItem("ProDing_Usuario");
    if(localStorage.getItem('ProDing_Cor') != 'rgb(0,112,253)'){
        document.getElementById('side-menu21').style.backgroundColor = localStorage.getItem('ProDing_Cor');
    }
    if(localStorage.getItem("ProDing_Tipo_conta") == "0"){
        document.getElementById("menu-button17").style.visibility = "hidden";
    }
    else{
        document.getElementById("menu-button15").style.visibility = "hidden";
        document.getElementById("menu-button17").style.visibility = "visible";
    }
}])
   
.controller('loginCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    localStorage.setItem("ProDing_tour","S");
    if(localStorage.getItem("ProDing_log") == "1"){     
        window.location = "index.html#/side-menu21/page10";
    }
    if(localStorage.getItem('ProDing_Cor') != 'rgb(0,112,253)'){
        document.getElementById('page5').style.backgroundColor = localStorage.getItem('ProDing_Cor');
    }   
}])
   
.controller('introduOCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams){
    Tour();
}])
   
.controller('cadastreSeCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    localStorage.setItem("ProDing_tour","S");
    if(localStorage.getItem('ProDing_Cor') != 'rgb(0,112,253)'){
        document.getElementById('page9').style.backgroundColor = localStorage.getItem('ProDing_Cor');
    }
}])
   
.controller('bibliotecaCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    checkConnection();
    if(localStorage.getItem('ProDing_Cor') != 'rgb(0,112,253)'){
        document.getElementById('page10').style.backgroundColor = localStorage.getItem('ProDing_Cor');
    }
}])
   
.controller('perfilDoUsuRioCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    if(localStorage.getItem('ProDing_Cor') != 'rgb(0,112,253)'){
        document.getElementById('page11').style.backgroundColor = localStorage.getItem('ProDing_Cor');
    }
    if(localStorage.getItem("ProDing_log")!="0"){
        document.getElementById("namex").innerHTML=localStorage.getItem("ProDing_Nome_comp");
        document.getElementById("emailx").innerHTML=localStorage.getItem("ProDing_Email");
    }
}])
   
.controller('favoritosCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    ListDownloads();
    if(localStorage.getItem('ProDing_Cor') != 'rgb(0,112,253)'){
        document.getElementById('page12').style.backgroundColor = localStorage.getItem('ProDing_Cor');
    }
}])
   
.controller('pGinaDaSinopseCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    checkConnection();
    RetornaURL2(); 
    CarSinopse(); 
    CarComent();
    if(localStorage.getItem('ProDing_Cor') != 'rgb(0,112,253)'){
        document.getElementById('page13').style.backgroundColor = localStorage.getItem('ProDing_Cor');
    }
}])
   
.controller('paginaDaCategoriaSelecionadaCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    RetornaURL1(); 
    ListBooks();
    verificaInternet();
    if(localStorage.getItem('ProDing_Cor') != 'rgb(0,112,253)'){
        document.getElementById('page15').style.backgroundColor = localStorage.getItem('ProDing_Cor');
    }
}])
   
.controller('adicionarUmComentRioCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams){ 
    if(localStorage.getItem('ProDing_Cor') != 'rgb(0,112,253)'){
        document.getElementById('page20').style.backgroundColor = localStorage.getItem('ProDing_Cor');
    }
}])
   
.controller('sejaPROCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    if(localStorage.getItem('ProDing_Cor') != 'rgb(0,112,253)'){
        document.getElementById('page16').style.backgroundColor = localStorage.getItem('ProDing_Cor');
    }
}])
   
.controller('personalizaOCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    if(localStorage.getItem('ProDing_Cor') != 'rgb(0,112,253)'){
        document.getElementById('page17').style.backgroundColor = localStorage.getItem('ProDing_Cor');
    }
}])
   
.controller('leituraDoLivroCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    if(localStorage.getItem('ProDing_Cor') != 'rgb(0,112,253)'){
        document.getElementById('page18').style.backgroundColor = localStorage.getItem('ProDing_Cor');
    }
}])
   
.controller('cadastralivroCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    if( localStorage.getItem('ProDing_Cor') != 'rgb(0,112,253)'){
        document.getElementById('page19').style.backgroundColor = localStorage.getItem('ProDing_Cor');
    }
}])

.controller('MainCtrl', function($scope,ionicSuperPopup) {

$scope.executa = function () {
ionicSuperPopup.show("Basic Super Popup!");
};

$scope.popup2 = function () {
  ionicSuperPopup.show("Basic Super Popup!", "With some text here");
};

$scope.popup3a = function () {
ionicSuperPopup.show("Success!", "You have successfully did something!", "success");
};

$scope.popup3b = function () {
ionicSuperPopup.show("Warning!", "Now I warning you son!", "warning");
};

$scope.popup3c = function () {
ionicSuperPopup.show("Error!", "That was a bad thing you just did!", "error");
};

$scope.popup4 = function () {
  ionicSuperPopup.show({
     title: "Are you sure?",
     text: "This will do something!",
     type: "warning",
     showCancelButton: true,
     confirmButtonColor: "#DD6B55",
     confirmButtonText: "Yes, do that thing!",
     closeOnConfirm: false},
  function(){
     ionicSuperPopup.show("Nice Work!", "You totally just did something!", "success");
  });
};

$scope.popup5 = function () {
  ionicSuperPopup.show({
    title: "Are you sure?",
    text: "This will do something again!",
     type: "warning",
     showCancelButton: true,
     confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, do that thing!",
     cancelButtonText: "No, don't!",
     closeOnConfirm: false,
     closeOnCancel: false },
  function(isConfirm){
     if (isConfirm) {
        ionicSuperPopup.show("You did it!", "You totally just did something!", "success");
     } else {
        ionicSuperPopup.show("Cancelled", "Pew, you totally didn't do anything!", "error");
     }
  });
};

$scope.popup6 = function () {
  ionicSuperPopup.show({
     title: "Custom Super Popup!",
     text: "OMG, I can do custom gifs?",
     imageUrl: "http://i.imgur.com/NUyttbn.gif" });
};
})
 