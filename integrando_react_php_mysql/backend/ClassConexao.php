<?php

abstract class ClassConexao{
    # conexao com o banco de dados
    protected function conectaDB()
    {
        try{
            $con = new PDO("mysql:host=localhost; dbname=tutorias", "server", "server");
            return $con;
        }catch(PDOException $Erro){
            return $Erro->getMessage();
        }
        
    }
    
}
