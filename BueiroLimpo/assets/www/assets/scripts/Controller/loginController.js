
document.addEventListener("deviceready", onDeviceReady, false);
var db;
var listUsuarios =  new Array();
var loginDao = new LoginDAO();


function onDeviceReady() {
	console.log("Conectando...");

	db = window.openDatabase("bueiro", "1.0", "Bueiro Limpo", 1000000);
	console.log("Conectado !");
	loginInit();
	return;
}

// funcao para criar as tabelas de Usuarios e popular a tabela com usuarios.
function loginInit() {
	db.transaction(function(tx) {
		loginDao.createTableUsuario(tx);
		populaUsuarios(tx);
	}, errorCB);
}   		

//funcao popula os usuarios validos para o aplicativo.
function populaUsuarios(tx) {
	carregaUsuariosObjeto('sergio', '123');
	carregaUsuariosObjeto('rafael', '1234');
	carregaUsuariosObjeto('daniel', '12345');
	carregaUsuariosBanco(tx);
}

// carrega osusuario em um array local.
function carregaUsuariosObjeto(nome,senha){
	var usuarioModel = new UsuarioModel();
	usuarioModel.setNome(nome);
	usuarioModel.setSenha(senha);
	listUsuarios.push(usuarioModel);
}

// inseri o array local no banco de dados tabela Usuario
function carregaUsuariosBanco(tx) {
	for (i = 0; i < listUsuarios.length; i++) {
		loginDao.insertTableUsuario(tx, listUsuarios[i]);
	}
}

function validaLogin(){
	var usuario = $("#usuario").val();
	var senha = $("#senha").val();
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM Usuario where nome="'+usuario+'"', [], function(tx, result) {
			if (result.rows.length > 0) {
				if(result.rows.item(0).senha == senha){
					document.location = "passo1.html";
				}else{
					alert('Senha Inválida');
				}
			}else{
				alert('Usuario Inválido');
			}
		}, errorCB);
	}, errorCB);
}


$(function() {
	/**
	$("button").click(function() {
		var usuario = $("#usuario").val();
		var senha = $("#senha").val();

		if (!AppConfig.testMode) {
			PandaJS.webService({
				url : AppConfig.webServiceUrl,
				method : "VerifyLogin",
				data : {
					username : "\"" + usuario + "\"",
					password : "\"" + senha + "\""
				},
				success : function(data) {
					if (data.d == "true") {
						window.localStorage.setItem("usuario", usuario);
						document.location = "passo1.html";
					} else
						alert("Usu�rio ou senha incorretos !");
				},
				error : function(data) {
					console.debug("Error: ");
					console.debug(data);
					alert("Error: " + data);
				}
			});
		} else {
			document.location = "passo1.html";
		}

		return false;
	});
	*/
});