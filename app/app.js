var app = angular.module('simpleCrudTopicosAvancados', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/views/home.html',
		controller : 'HomeController',
	}).when('/clientes', {
		templateUrl: 'app/views/clientes.html',
		controller : 'ClientesController',
	}).when('/produtos', {
		templateUrl: 'app/views/produtos.html',
		controller : 'ProdutosController',
	}).when('/pedidos', {
		templateUrl: 'app/views/pedidos.html',
		controller : 'PedidosController',
	}).otherwise ({redirectTo: '/'});
});
