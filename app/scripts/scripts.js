$(document).ready(function(){
	// $('.refresh-page').click(function() {
	// 	refreshPage();
	// });
	// refreshPage();

	$.validate({
		form:'.form',
		borderColorOnError : '#c12728',
		scrollToTopOnError : false,
		validateOnBlur : true,
		onError:function() {
			//alert('Validation failed');
		},
		onSuccess:function(){
			$('p.error').html('Gravado com sucesso!');
			var type		= $("form[name=form] input[name='send[type]']").val(),
				// CLIENTE
				name		= $("form[name=form] input[name='send[name]']").val(),
				email		= $("form[name=form] input[name='send[email]']").val(),
				cpf			= $("form[name=form] input[name='send[cpf]']").val(),
				endereco	= $("form[name=form] input[name='send[endereco]']").val(),
				// PRODUTO
				categoria 	= $("form[name=form] input[name='send[categoria]']").val(),
				valorcusto	= $("form[name=form] input[name='send[valorcusto]']").val(),
				valorvenda 	= $("form[name=form] input[name='send[valorvenda]']").val(),
				quantidade 	= $("form[name=form] input[name='send[quantidade]']").val(),
				// PEDIDO 
				clientecodigo 		= $("form[name=form] input[name='send[clientecodigo]']").val(),
				produtocodigo 		= $("form[name=form] input[name='send[produtocodigo]']").val(),
				quantidadeproduto 	= $("form[name=form] input[name='send[quantidadeproduto]']").val(),
				valorunitario 		= $("form[name=form] input[name='send[valorunitario]']").val(),
				valortotal 			= $("form[name=form] input[name='send[valortotal]']").val()
				;
			var data = null;	
			if (type == 'cliente') {
				data = {type: type, 
						object : {nome : name, email : email, cpf : cpf, endereco : endereco}
					};
			} else if (type == 'produto') {
				data = {type: type, 
						object : {nome : name, categoria : categoria, valorcusto : valorcusto, valorvenda : valorvenda, quantidade : quantidade}
					};
			} else {
				data = {type: type, 
						object : {clientecodigo : clientecodigo, produtocodigo : produtocodigo, quantidadeproduto : quantidadeproduto, valorunitario : valorunitario, valortotal : valortotal}
					};
			}
			$.ajax({
				url: '/trabalho_topicos/app/data/write.php',
				type: 'POST',
				data: data,
				dataType: 'json',
				success: function(data) {
					$('.sendcontact').prop("disabled",true);
					$('p.error').html('Gravado com sucesso!');
					$('.refresh-page').click();
					$("form[name=form] input").val('');
					$("form[name=form] input[name='send[type]']").val(type);
				},
				error: function() {
					$("#xhr").removeClass('xhr');
				}
			});
		}
	});	
	// $("input[name='send[quantidadeproduto]']").on('input',function(e){
	// 	calculaValores();
	// });
	// $("input[name='send[produtocodigo]']").on('input',function(e){
	// 	calculaValores();
	// });
});

function calculaValores() {
	var data = {from: 'produto', type: 'getProductsValues', product : $("input[name='send[produtocodigo]']").val()};

	$.ajax({
		url: '/trabalho_topicos/app/data/select.php',
		type: 'POST',
		data: data,
		dataType: 'json',
		success: function(data) {
			$("input[name='send[valorunitario]']").val(data.valorvenda);
			var total = data.valorvenda * parseFloat($("input[name='send[quantidadeproduto]']").val());
			$("input[name='send[valortotal]']").val(total);
		},
		error: function() {
			alert('error!');
		}
	});
}