<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale = 1, maximum-scale = 1, user-scalable = no, width = device-width" />

	<title>Trabalho - Tópicos Avançados</title>
	<!-- Styles -->
	<link href="css/normalize.css" rel="stylesheet" type="text/css" />
	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="css/styles.css" rel="stylesheet" type="text/css" />
	<!-- Scripts -->
	<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
	<!--<script type="text/javascript" src="js/bootstrap.min.js"></script>-->
	<script type="text/javascript" src="js/jquery.form-validator.min.js"></script>
	<script type="text/javascript" src="js/scripts.js"></script>	

	<!--[if lt IE 9]>
	    <script src="js/html5shiv.js"></script>
	<![endif]-->
</head>
<body>
	<div class="navbar navbar-flat">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a href="#" class="navbar-brand">MENU</a>
			</div>
			<div class="navbar-collapse collapse">
				<nav>
					<ul class="nav navbar-nav">
						<li><a href="?">HOME</a></li>
						<li><a href="?p=clientes">CLIENTES</a></li>
						<li><a href="?p=produtos">PRODUTOS</a></li>
						<li><a href="?p=pedidos">PEDIDOS</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
	<section id="header" class="header">
		
	</section>
	<section id="content" class="content">
		<?php
			if (isset($_GET['p'])) {
				switch ($_GET['p']) {
					case 'clientes':
						include($_GET['p'].'.php');
						break;
					case 'produtos':
						include($_GET['p'].'.php');
						break;
					case 'pedidos':
						include($_GET['p'].'.php');
						break;
					default:
						break;
				}
			} else {
				echo 'HOME';
			}
		?>
	</section>
		
	<section id="footer" class="footer">
		
	</section>
</body>
</html>