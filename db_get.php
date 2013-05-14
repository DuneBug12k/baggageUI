<?php

//mysql_connect("localhost", "dbuser", "password" );
mysql_select_db("test");
$query = "select * from users";

$result = mysql_query($query);
if (!$result) 
	die("query failed.");

$rows = array();
while( $row = mysql_fetch_object($result)) {
	$rows[] = $row;
}

echo json_encode($rows);

/*
 * 
 * 
[{"name_first":"mike",
"name_last":"delauter",
"sex":"m",
"baggage_num":"1"
,"skill level":"5"
,"id":"1"}
 */