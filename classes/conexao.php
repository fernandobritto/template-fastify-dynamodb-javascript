
<?php

class conectar{
	private $server = "localhost";
	private $usuario = "root";
	private $senha = "";
	private $banco = "dbsemantic"; 


	public function conexao(){
		$conn = mysqli_connect( $this->server, $this->usuario, $this->senha, $this->banco);

		return $conn;
	}

}

