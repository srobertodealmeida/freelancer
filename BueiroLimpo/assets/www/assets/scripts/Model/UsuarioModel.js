//Modelo do Usuario representa a tabela.
function UsuarioModel(){
	
	var nome;
	var senha;
	
	// Sets e Gets
	this.getNome = function () { return nome; };
	this.setNome = function (value) { nome = value };
	
	this.getSenha = function () { return senha; };
	this.setSenha = function (value) { senha = value };

};