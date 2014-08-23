<div ng-controller="PedidosController">
	<div class="formulario">
		<div class="heading">
			<h2>CADASTRAR PEDIDO</h2>
		</div>
		<div class="col-xs-12 col-sm-9 col-md-9 centered">
			<form action="write.php" onSubmit="return false;" id="xhr" method="post" name="form" class="form">
				<input name="send[type]" type="hidden" value="pedido" name="type">
				<input name="send[clientecodigo]" type="text" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Código do Cliente..." data-validation="required">
				<input name="send[produtocodigo]" type="text" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Código do Produto..." data-validation="required">
				<input name="send[quantidadeproduto]" type="number" step="1" pattern="^\d+(\.|\,)\d{2}$" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Quantidade..." data-validation="required">
				<input name="send[valorunitario]" type="number" step="0.5" pattern="^\d+(\.|\,)\d{2}$" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" disabled placeholder="Valor Unitário..." data-validation="required">
				<input name="send[valortotal]" type="number" step="0.5" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Valor Total..." disabled data-validation="required">

				<p><button class="submit sendcliente">GRAVAR</button></p>
			</form>
			<p class="error"></p>
		</div>
	</div>
	<div class="panel panel-default col-xs-12 col-sm-9 col-md-9 centered consulta " id="no-more-tables">
		<!-- Default panel contents -->
		<div class="panel-heading">
			Pedidos
			<i class="glyphicon glyphicon-refresh refresh-page" ng-click="init();"/>
			<input type="text" class="input-search" ng-model="searchText" placeholder="Procurar..."/> 
		</div>
		<!-- Table -->
		<table class="table">
			<tr ng-repeat="pedido in dataList | filter:searchText">
				<td data-title="Código:">{{ pedido.codigo }}</td>
				<td data-title="Cliente:">{{ pedido.clientecodigo }}</td>
				<td data-title="Produto:">{{ pedido.produtocodigo }}</td>
				<td data-title="Quantidade:">{{ pedido.quantidadeproduto }}</td>
				<td data-title="Valor Unitário:">{{ pedido.valorunitario | currency }}</td>
				<td data-title="Valor Total:">{{ pedido.valortotal | currency }}</td>
				<td data-title="Ações:">
					<button id="{{ pedido.codigo }}" ng-click="deleteData($event)">Excluir</button>
				</td>
			</tr>
		</table>
	</div>
</div>
<script type="text/javascript" src="app/scripts/scripts.js"></script>	