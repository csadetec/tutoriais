<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH.'/libraries/ImplementJwt.php';
class Test extends CI_Controller {

  public function __construct()
  {
    parent::__construct();
    $this->objOfJwt = new ImplementJwt();
    header('Content-Type: application/json');
  }
	
  //Generating Token and put user data into token
  
  public function LoginToken()
  {
    $tokenData['uniqueId'] = '55555';
    $tokenData['role'] = 'admn';
    $tokenData['timeStamp'] = Date('Y-m-d h:i:s');
    $jwtToken = $this->objOfJwt->GenerateToken($tokenData);
    echo json_encode(array('Token'=>$jwtToken));
  }
}
