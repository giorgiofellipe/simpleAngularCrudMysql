var app = angular.module('simpleCrudTopicosAvancados', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/views/home.html',
		controller : 'HomeController',
	}).when('/clientes', {
		templateUrl: 'app/views/clientes.php',
		controller : 'ClientesController',
	}).when('/produtos', {
		templateUrl: 'app/views/produtos.php',
		controller : 'ProdutosController',
	}).when('/pedidos', {
		templateUrl: 'app/views/pedidos.php',
		controller : 'PedidosController',
	}).otherwise ({redirectTo: '/'});
});
