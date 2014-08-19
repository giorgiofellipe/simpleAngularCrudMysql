<?php
	include ('conn.php');
	$connection = new MySQL('topicos','root','root','localhost',8889); 
	$connection->insert($_POST['type'], $_POST['object'], null, null);
?>