<?php
include ('ClassCarros.php');

header('Access-Control-Allow-Origin:*');


$carros = new ClassCarros();
$carros->exibeCarros();
/**/
//print_r($carros);
