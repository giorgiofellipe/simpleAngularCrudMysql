<?php
	include ('conn.php');
	$connection = new MySQL('topicos','root','root','localhost',8889); 
	echo json_encode($connection->delete($_POST['from'], $_POST['where'], null, null));
?>