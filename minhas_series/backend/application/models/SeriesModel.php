<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class SeriesModel extends CI_Model {

        private $table = 'series';

        public function select()
        {
        $this->db->from($this->table);
        return $this->db->get()->result();
        }
        public function selectGenre($genre)
        {
        $this->db->from($this->table);
        $this->db->where('genre', $genre);
        return $this->db->get()->result();
        }
    
        public function selectId($id)
	{
        $this->db->from($this->table);
        $this->db->where('id', $id);
        return $this->db->get()->row();
	}
}
