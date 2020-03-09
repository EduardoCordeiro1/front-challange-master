//função para a mascára de telefone
function mascara(o,f){
	v_obj=o
	v_fun=f
	setTimeout("execmascara()",1)
}
function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
	v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
	v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
	v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
	return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}


//função de validação de senhas 
function validaSenha(){
	var nome = document.getElementById("nomeid","telefone","email").value;
	var senha1 = document.getElementById("senha").value;
	var senha2 = document.getElementById("rsenha").value;
	
	if(nome == "" || senha == "" || senha1 != senha2){
		document.getElementById("msgerro").style.display = 'block';
	}
	else{
		alert('Ola, '+nome.value+'!!! Esses dados foram cadastrados no nosso sistema com sucesso: \nTelefone: '+telefone.value+ '\nEmail: '+email.value+ '\nObrigado!!!');
	}
}

