<div ng-controller="ProdutosController">
	<div class="formulario">
		<div class="heading">
			<h2>CADASTRAR PRODUTO</h2>
		</div>
		<div class="col-xs-12 col-sm-9 col-md-9 centered">
			<form action="write.php" onSubmit="return false;" id="xhr" method="post" name="form" class="form">
				<input name="send[type]" type="hidden" value="produto" name="type">
				<input name="send[name]" type="text" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Nome..." data-validation="required">
				<input name="send[categoria]" type="text" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Categoria..." data-validation="required">
				<input name="send[valorcusto]" type="number" step="0.5" pattern="^\d+(\.|\,)\d{2}$" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Valor de Custo..." data-validation="required">
				<input name="send[valorvenda]" type="number" step="0.5" pattern="^\d+(\.|\,)\d{2}$" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Valor de Venda..." data-validation="required">
				<input name="send[quantidade]" type="number" step="0.5" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Quantidade..." data-validation="required">

				<p><button class="submit sendcliente">GRAVAR</button></p>
			</form>
			<p class="error"></p>
		</div>
	</div>
	<div class="panel panel-default col-xs-12 col-sm-9 col-md-9 centered consulta " id="no-more-tables">
		<!-- Default panel contents -->
		<div class="panel-heading">
			Produtos
			<i class="glyphicon glyphicon-refresh refresh-page" ng-click="init();"/>
			<input type="text" class="input-search" ng-model="searchText" placeholder="Procurar..."/> 
		</div>
		<!-- Table -->
		<table class="table">
			<tr ng-repeat="produto in dataList | filter:searchText">
				<td data-title="Código:">{{ produto.codigo }}</td>
				<td data-title="Nome:">{{ produto.nome }}</td>
				<td data-title="Categoria:">{{ produto.categoria }}</td>
				<td data-title="Valor Custo:">{{ produto.valorcusto | currency }}</td>
				<td data-title="Valor Venda:">{{ produto.valorvenda | currency }}</td>
				<td data-title="Quantidade:">{{ produto.quantidade }}</td>
				<td data-title="Ações:">
					<button id="{{ produto.codigo }}" ng-click="deleteData($event)">Excluir</button>
				</td>
			</tr>
		</table>
	</div>
</div>
<script type="text/javascript" src="app/scripts/scripts.js"></script>	