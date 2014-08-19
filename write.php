<?php
	include ('conn.php');
	$connection = new MySQL('topicos','root','root','localhost',8889); 
	echo json_encode($connection->insert($_POST['type'], $_POST['object'], null, $_POST['datatype']));
?>