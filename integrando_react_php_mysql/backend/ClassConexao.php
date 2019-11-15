<?php

abstract class ClassConexao{
    # conexao com o banco de dados
    public function conectaDB()
    {
        $con = new mysqli("localhost", "server", "server", "tutoriais");
        
        if($con->connect_error){
            die("Connection failed: ".$con->connect_error);
        }
        return $con;
    }
    
}
