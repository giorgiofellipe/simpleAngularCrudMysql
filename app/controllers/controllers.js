angular.module('appSinglePage').controller('HomeCtrl', function($scope, $rootScope){
	$rootScope.activetab = "/";
});

angular.module('appSinglePage').controller('ClientesCtrl', function($scope, $rootScope){
	$rootScope.activetab = "/clientes";
});

angular.module('appSinglePage').controller('ProdutosCtrl', function($scope, $rootScope){
	$rootScope.activetab = "/produtos";
});

angular.module('appSinglePage').controller('PedidosCtrl', function($scope, $rootScope){
	$rootScope.activetab = "/pedidos";
});