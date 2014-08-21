<?php
	include ('conn.php');
	$connection = new MySQL('topicos','root','root','localhost',8889); 
	if ($_POST['type'] == 'select') {
		echo json_encode($connection->select($_POST['from']));
	} else {
		echo json_encode($connection->select($_POST['from'], array('codigo'=> $_POST['product'])));
	}
?>