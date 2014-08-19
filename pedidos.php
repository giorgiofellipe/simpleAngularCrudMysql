<div class="formulario">
	<div class="heading">
		<h2>CADASTRAR PEDIDO</h2>
	</div>
	<div class="col-xs-12 col-sm-9 col-md-9 centered">
		<form action="write.php" onSubmit="return false;" id="xhr" method="post" name="form" class="form">
			<input name="send[type]" type="hidden" value="produto" name="type">
			<input name="send[name]" type="text" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Nome..." data-validation="required">
			<input name="send[categoria]" type="text" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Categoria..." data-validation="email">
			<input name="send[valorcusto]" type="number" step="0.5" pattern="^\d+(\.|\,)\d{2}$" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Valor de Custo..." data-validation="required">
			<input name="send[valorvenda]" type="number" step="0.5" pattern="^\d+(\.|\,)\d{2}$" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Valor de Venda..." data-validation="required">
			<input name="send[quantidade]" type="number" step="0.5" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Quantidade..." data-validation="required">

			<p><button class="submit sendcliente">GRAVAR</button></p>
		</form>
		<p class="error"></p>
	</div>
</div>