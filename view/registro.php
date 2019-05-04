<?php

	require_once "../classes/conexao.php";
	$obj = new conectar();
	$conexao = $obj->conexao();

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Registro de Usuário</title>
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
	<link rel="stylesheet" href="../css/styles.css">
</head>
<body>
	<div>
		<form id="frmRegistro">
  <label>
    <p class="label-txt">Nome</p>
    <input type="text" class="input">
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">Usúario</p>
    <input type="text" class="input">
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">Email</p>
    <input type="text" class="input">
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">Senha</p>
    <input type="text" class="input">
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <button type="submit" id="registro" class="btn btn-primary">Registrar</button>
</form>
	</div>

	<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="../js/globais.js"></script>


<script type="text/javascript">
	$(document).ready(function(){
		  $('#registro').click(function() {

        vazios=validarFormVazio('#frmRegistro');

        if(vazios > 0){
          alert("Preencha as Campos!");
          return false;
        }

        dados=$('#frmRegistro').serialize();
        $.ajax({
          type:"POST",
          data:datos,
          url:"SE TIVER PREENCHIDO SERA REDIRECIONADO AKI",

          success:function(r){
            alert(r);

            if(r==1){
              alert("Inserido com Sucesso");
            }else{
              alert("Erro ao Inserir");              
            }
          }
        });     
      });
	});	
</script>	
</body>
</html>