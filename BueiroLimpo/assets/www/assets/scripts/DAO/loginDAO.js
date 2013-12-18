// Classe que realiza inserts,updates, create table Usuario.

var listUsuarios =  new Array();
function LoginDAO (){

// funcao usada para apagar e criar a tabela de usuarios quando inicia o aplicaitvo.
this.createTableUsuario = function(tx){
	tx.executeSql('DROP TABLE IF EXISTS Usuario');
	tx.executeSql('CREATE TABLE IF NOT EXISTS Usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT , senha TEXT)');
};

//funcao que faz insert na tabela Usuario.
this.insertTableUsuario = function (tx,usuarioModel){
	 tx.executeSql('INSERT INTO Usuario(nome,senha) VALUES ("' + usuarioModel.getNome() + '", "' + usuarioModel.getSenha() + '")');
};


}

