$(document).ready(function(){
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
				//PRODUTO
				categoria 	= $("form[name=form] input[name='send[categoria]']").val(),
				valorcusto	= $("form[name=form] input[name='send[valorcusto]']").val(),
				valorvenda 	= $("form[name=form] input[name='send[valorvenda]']").val(),
				quantidade 	= $("form[name=form] input[name='send[quantidade]']").val()
				;
			var data = null;	
			if (type == 'cliente') {
				data = {type: type, 
						object : {nome : name, email : email, cpf : cpf, endereco : endereco}
						// datatype : Array('str', 'str', 'str', 'str')
					};
			} else if (type == 'produto') {
				data = {type: type, 
						object : {nome : name, categoria : categoria, valorcusto : valorcusto, valorvenda : valorvenda, quantidade : quantidade},
						datatype : Array('str', 'str', 'float', 'float', 'float')
					};
			} else {

			}
			console.log(data);
			$.ajax({
				url: '/trabalho_topicos/write.php',
				type: 'POST',
				data: data,
				dataType: 'json',
				success: function(data) {
					$('.sendcontact').prop("disabled",true);
					$('p.error').html('Gravado com sucesso!.');
				},
				error: function() {
					$("#xhr").removeClass('xhr');
				}
			});
		}
	});	
});