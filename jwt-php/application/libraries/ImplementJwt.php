<?php
//require APPPATH.'/libraries/JWT.php';
require __DIR__.'/JWT.php';

class ImplementJwt
{
  //The function generate token
  private $key = "subscribe_my_channel";
  public function GenerateToken($data){
    $jwt = JWT::encode($data, $this->key);
    //$jwt = $this->jwt->encode($data, $this->key);
    return $jwt;
  }

  //This function deccode the token
  public function DecodeToken($token){
    $decoded = JWT::decode($token, $this->key, array('HS256'));
    $decodedData = (array) $decoded;
    return $decodedData;

  }

}