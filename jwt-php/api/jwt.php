<?php
//Header token
$header = [
    'typ' => 'JWT',
    'alg' => 'HS25'
];

//Payload - Content
$payload = [
    'exp' => (new DateTime('now'))->getTimestamp(),
    'uid' => 1,
    'email' => 'teste@gmail.com',
];

//JSON
$header = json_encode($header);
$payload = json_encode($payload);

//Base 64 
$header = base64_encode($header);
$payload = base64_encode($payload);

//key
$key = 'teste';


//Sign 
$sign = hash_hmac('sha256', $header.'.'.$payload, $key, true);
$sign = base64_encode($sign);


//Token
$token = $header.'.'.$payload.'.'.$sign;

echo '<pre>';
echo 'Header :'.'<br>';
print_r($header);
echo '<br>';

echo 'Payload :'.'<br>';
print_r($payload);
echo '<br>';

echo 'Sign :'.'<br>';
print_r($sign);
echo '<br>';

echo 'Token :'.'<br>';
print_r($token);
echo '<br>';