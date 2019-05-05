// função de validação de formulario
function validarFormVazio() {
	if(document.form.nome.value ==""){
		alert("Por favor, preencha o campo nome.");
		document.form.nome.focus();
		return false;
	}

}


