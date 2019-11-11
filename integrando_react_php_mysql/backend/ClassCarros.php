<?php
include ('ClassConexao.php');
class ClassCarros extends ClassConexao{
    #Exibição ddos ccaarros em um json
    //$this->exibiCarros();
    public function exibeCarros()
    {
        $BFetch = $this->conectaDB()->prepare('select * from carros');
        $BFetch->execute();

        $j = [];
        $i = 0;

        while($Fetch = $BFetch->fetch(PD0 :: FETCH_ASSOC)){
            $j[$i] = [
                'id' =>$Fetch['id'],
                'marca' =>$Fetch['marca'],
                'modelo' =>$Fetch['modelo'],
                'ano' =>$Fetch['ano']
            ];
            $i++; 
        }

        echo json_decode($j);
        
    }
}