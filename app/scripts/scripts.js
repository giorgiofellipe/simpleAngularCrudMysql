$(document).ready(function(){
	$('.refresh-page').click(function() {
		refreshPage();
	});
	refreshPage();

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
					refreshPage();
					$("form[name=form] input").val('');
					$("form[name=form] input[name='send[type]']").val(type);
				},
				error: function() {
					$("#xhr").removeClass('xhr');
				}
			});
		}
	});	
	$("input[name='send[quantidadeproduto]']").on('input',function(e){
		calculaValores();
	});
	$("input[name='send[produtocodigo]']").on('input',function(e){
		calculaValores();
	});
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

function refreshPage() {
	var table	= $("form[name=form] input[name='send[type]']").val();
	var data = {from: table, type: 'select'};
	$.ajax({
		url: '/trabalho_topicos/app/data/select.php',
		type: 'POST',
		data: data,
		dataType: 'json',
		success: function(data) {
			$(".table tr").remove();
			if (!($.isArray(data))) {
				data = Array(data);
			}
			console.log(data);
			for (key in data) {
				var tr 			= document.createElement('tr');

				var tdCodigo 	= document.createElement('td');
				tdCodigo.innerHTML 		= data[key].codigo;
				tr.appendChild(tdCodigo);

				if (table == 'cliente') {
					var tdNome 		= document.createElement('td');
					var tdEmail 	= document.createElement('td');
					var tdCpf 		= document.createElement('td');
					var tdEndereco 	= document.createElement('td');

					tdNome.innerHTML 		= data[key].nome;
					tdEmail.innerHTML 		= data[key].email;
					tdCpf.innerHTML 		= data[key].cpf;
					tdEndereco.innerHTML 	= data[key].endereco;

					tr.appendChild(tdNome);
					tr.appendChild(tdEmail);
					tr.appendChild(tdCpf);
					tr.appendChild(tdEndereco);
				} else if (table == 'produto') {
					var tdNome 			= document.createElement('td');
					var tdCategoria 	= document.createElement('td');
					var tdCusto 		= document.createElement('td');
					var tdVenda 		= document.createElement('td');
					var tdQuantidade 	= document.createElement('td');

					tdNome.innerHTML 		= data[key].nome;
					tdCategoria.innerHTML 	= data[key].categoria;
					tdCusto.innerHTML 		= data[key].valorcusto;
					tdVenda.innerHTML 		= data[key].valorvenda;
					tdQuantidade.innerHTML 	= data[key].quantidade;

					tr.appendChild(tdNome);
					tr.appendChild(tdCategoria);
					tr.appendChild(tdCusto);
					tr.appendChild(tdVenda);
					tr.appendChild(tdQuantidade);
				} else {
					var tdCliente 		= document.createElement('td');
					var tdProduto 		= document.createElement('td');
					var tdQuantidade 	= document.createElement('td');
					var tdValorUnitario = document.createElement('td');
					var tdValorTotal 	= document.createElement('td');

					tdCliente.innerHTML 		= data[key].clientecodigo;
					tdProduto.innerHTML 		= data[key].produtocodigo;
					tdQuantidade.innerHTML 		= data[key].quantidadeproduto;
					tdValorUnitario.innerHTML 	= data[key].valorunitario;
					tdValorTotal.innerHTML 		= data[key].valortotal;

					tr.appendChild(tdCliente);
					tr.appendChild(tdProduto);
					tr.appendChild(tdQuantidade);
					tr.appendChild(tdValorUnitario);
					tr.appendChild(tdValorTotal);
				}
				var tdAcoes 	= document.createElement('td');
				var aDelete 	= document.createElement('button');
				aDelete.id = data[key].codigo;
				aDelete.onclick = function () {
				    deleteRegister(this.id);
				};
				aDelete.innerHTML = "Deletar";
				tdAcoes.appendChild(aDelete);
				tr.appendChild(tdAcoes);


				$('.table').append(tr);
			}
		},
		error: function() {
			alert('error!');
		}
	});
}

function deleteRegister(chave) {
	var type = $("form[name=form] input[name='send[type]']").val();
	var where = {'codigo':chave};

	var data = {from: type, where : where};

	$.ajax({
		url: '/trabalho_topicos/app/data/delete.php',
		type: 'POST',
		data: data,
		dataType: 'json',
		success: function(data) {
			refreshPage();
			console.log(data);
		},
		error: function() {
			alert('error!');
		}
	});
}

