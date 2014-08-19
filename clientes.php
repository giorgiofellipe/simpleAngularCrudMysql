<div class="formulario">
	<div class="heading">
		<h2>CADASTRAR CLIENTE</h2>
	</div>
	<div class="col-xs-12 col-sm-9 col-md-9 centered">
		<form action="write.php" onSubmit="return false;" id="xhr" method="post" name="form" class="form">
			<input name="send[type]" type="hidden" value="cliente" name="type">
			<input name="send[name]" type="text" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Nome..." data-validation="required">
			<input name="send[email]" type="email" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Email..." data-validation="email">
			<input name="send[cpf]" type="text" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="CPF..." data-validation="required">
			<input name="send[endereco]" type="text" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Endereço..." data-validation="">

			<p><button class="submit sendcliente">GRAVAR</button></p>
		</form>
		<p class="error"></p>
	</div>
</div>