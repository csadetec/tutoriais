<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Series extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('SeriesModel', 'series');
		header("Access-Control-Allow-Origin: *");

	}

	public function index()
	{
		$series = $this->series->select();
		echo json_encode($series);
	}
	

	public function get($id = null)
	{
		$serie = $this->series->selectId($id);
		echo json_encode($serie);
	}

	public function post()
	{
		$post = $this->input->post();
		$data['post'] = $post;
		$data['msg'] = 'Você vai longe lucas';
		echo json_encode($data);

	}


	public function genre($genre = null){
		$genre = urldecode($genre);
		$series = $this->series->selectGenre($genre);
		echo json_encode($series);
	}
}
