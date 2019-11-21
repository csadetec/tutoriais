<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Genres extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('GenresModel', 'genres');
		header("Access-Control-Allow-Origin: *");

	}

	public function index()
	{
		$genres = $this->genres->select();
		echo json_encode($genres);
	}

	public function get($id = null)
	{
		$serie = $this->genres->selectId($id);
		echo json_encode($serie);
	}

}
