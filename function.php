<?php 
$string = file_get_contents('agents.txt');
$result = explode('&,', $string);
var_dump($result);
 ?>