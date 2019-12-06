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

  public function GetTokenData()
  {
    $received_Token = $this->input->request_headers('Authorization');
    try{
      $jwtData = $this->objOfJwt->DecodeToken($received_Token['Token']);
      echo json_encode($jwtData);
    }catch (Exception $e){
      http_response_code('401');
      $data['status'] = false;
      $data['message'] = $e->getMessage();
      echo json_encode($data);
      exit;
    }
  }
}
