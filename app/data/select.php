<?php
	include ('conn.php');
	$connection = new MySQL('topicos','root','root','localhost',8889); 
	echo json_encode($connection->select($_POST['from'], array('codigo'=> $_POST['product'])));
?>