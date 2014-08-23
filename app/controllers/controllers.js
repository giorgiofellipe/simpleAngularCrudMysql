angular.module('simpleCrudTopicosAvancados').controller('HomeController', function($scope, $rootScope){
	$rootScope.activetab = "/";
});

angular.module('simpleCrudTopicosAvancados').controller('ClientesController', function($scope, $rootScope, dataFactory){
	$rootScope.activetab = "/clientes";
	function init() {
		$scope.dataList = dataFactory.getData();
	}
	init();
});

angular.module('simpleCrudTopicosAvancados').controller('ProdutosController', function($scope, $rootScope){
	$rootScope.activetab = "/produtos";
	function init() {
		$scope.dataList = dataFactory.getData();
	}
	init();
});

angular.module('simpleCrudTopicosAvancados').controller('PedidosController', function($scope, $rootScope){
	$rootScope.activetab = "/pedidos";
	function init() {
		$scope.dataList = dataFactory.getData();
	}
	init();
});


app.factory('dataFactory', function($http) {
	var factory = {};
	factory.getData = function () {
		var values = {};
		var table	= $("form[name=form] input[name='send[type]']").val();
		var data = {from: table, type: 'select'};
		$.ajax({
			url: '/trabalho_topicos/app/data/select.php',
			type: 'POST',
			data: data,
			async: false,
			dataType: 'json',
			success: function(data) {
				values = data;
			},
			error: function() {
			}
		});
		return values;
	};
	return factory;
});
