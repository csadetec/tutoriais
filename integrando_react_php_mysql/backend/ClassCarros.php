<?php
include ('ClassConexao.php');
class ClassCarros extends ClassConexao{
    #Exibição ddos ccaarros em um json
    //$this->exibiCarros();
    public function exibeCarros()
    {
        $sql = "select * from carros";
        
        $result = $this->conectaDB()->query($sql);
        $j = [];
        $i = 0;
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
               $j[$i++] = [
                'id' => $row['id'],
                'marca' => $row['marca'],
                'modelo' => $row['modelo'],
                'ano' => $row['ano'],
               ];
  
            }
        } 

        echo json_encode($j);

    }

        
    
}