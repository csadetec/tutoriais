<?php namespace App\Controllers;

class Teste extends BaseController
{
	public function index()
	{
		//return view('welcome_message');
		$user = array(
			'name' => 'Lucas de Sousa',
			'home' => 'Alvaro Ferreira Cardos',
			'work' => 'Escola Frei Carlos Vicuña'
		);

		$data['user'] = $user;

		return json_encode($data);
	}

	//--------------------------------------------------------------------

}
