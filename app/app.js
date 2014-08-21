angular.module('appSinglePage', ['ngRoute']);

angular.module('appSinglePage').config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/views/home.html',
		controller : 'HomeCtrl',
	}).when('/clientes', {
		templateUrl: 'app/views/clientes.php',
		controller : 'ClientesCtrl',
	}).when('/produtos', {
		templateUrl: 'app/views/produtos.php',
		controller : 'ProdutosCtrl',
	}).when('/pedidos', {
		templateUrl: 'app/views/pedidos.php',
		controller : 'PedidosCtrl',
	}).otherwise ({redirectTo: '/'});
});
