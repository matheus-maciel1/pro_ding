angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    
    .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('introduO', {
    url: '/page8',
    templateUrl: 'templates/introduO.html',
    controller: 'introduOCtrl'
  })

  .state('cadastreSe', {
    url: '/page9',
    templateUrl: 'templates/cadastreSe.html',
    controller: 'cadastreSeCtrl'
  })

  .state('menu.biblioteca', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/biblioteca.html',
        controller: 'bibliotecaCtrl'
      }
    }
  })

  .state('menu.perfilDoUsuRio', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDoUsuRio.html',
        controller: 'perfilDoUsuRioCtrl'
      }
    }
  })

  .state('menu.favoritos', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/favoritos.html',
        controller: 'favoritosCtrl'
      }
    }
  })

  .state('menu.pGinaDaSinopse', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pGinaDaSinopse.html',
        controller: 'pGinaDaSinopseCtrl'
      }
    }
  })

  .state('menu.paginaDaCategoriaSelecionada', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paginaDaCategoriaSelecionada.html',
        controller: 'paginaDaCategoriaSelecionadaCtrl'
      }
    }
  })

  .state('menu.adicionarUmComentRio', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/adicionarUmComentRio.html',
        controller: 'adicionarUmComentRioCtrl'
      }
    }
  })

  .state('menu.sejaPRO', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sejaPRO.html',
        controller: 'sejaPROCtrl'
      }
    }
  })

  .state('menu.personalizaO', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/personalizaO.html',
        controller: 'personalizaOCtrl'
      }
    }
  })

  .state('menu.leituraDoLivro', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/leituraDoLivro.html',
        controller: 'leituraDoLivroCtrl'
      }
    }
  })

  .state('menu.cadastralivro', {
    url: '/page30',
    views: {
        'side-menu21': {
            templateUrl: 'templates/cadastralivro.html',
            controller: 'cadastralivroCtrl'
        }
    }
  })

$urlRouterProvider.otherwise('/page8')


});