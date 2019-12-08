<?php
$key = 'bob-esponja';

$header = [
  'typ' => 'JWT',
  'alg' => 'HS256'
];

$header = json_encode($header);
$header = base64_encode($header);

$payload = [
  'iss' => 'vedcasts.com.br',
  'username' => 'vedovelli',
  'email' => 'vedovelli@gmail.com',
  'name' => 'lucas de sousa assunção'
];

$payload = json_encode($payload);
$payload = base64_encode($payload);

$sign  = hash_hmac('sha256', $header.'.'.$payload, $key);
$sign = base64_encode($sign);

$token = $header.'.'.$payload.'.'.$sign;
echo $token;