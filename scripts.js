
const apiUrl = 'https://login.microsoftonline.com/be87ed09-e753-468f-8244-e2f3811ceacc/oauth2/v2.0/token';
const client_id = '682aac27-6b4b-4f13-a4f9-21f8b0f30f08';
const client_secret = '.C=T8S7[XpPu0qY-HTPcUgVObr4=bHUF';
const scope = 'https://graph.microsoft.com/.default';


const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'SdkVersion': 'postman-graph/v1.0',
  'Cache-Control': 'no-cache'
};


let loginbtn = document.getElementById('loginbtn');
let logoutbtn = document.getElementById('logoutbtn');

if (loginbtn) {
  //Adiciona um evento de click ao botao de login
  loginbtn.addEventListener('click', function(){

    //pega os elementos username e password
    let username = document.getElementById('username').value;
    let password = document.getElementById('psw').value;

    var body = new URLSearchParams();
    //adiciona ao body
    body.append('grant_type', 'password');
    body.append('client_id', client_id);
    body.append('client_secret', client_secret);
    body.append('scope', scope);
    body.append('userName', username);
    body.append('password', password);


    const config = {
      method: 'POST', body, headers
    };

    //executa o login
    login(config);
  });
}

if (logoutbtn) {
  //Adiciona um evento de click ao botao de logout
  logoutbtn.addEventListener('click', function(){

    //redireciona para a pagina de login;
    window.location.replace("index.html");
  });
}


//funcao que executa o login
async function login(config){
  const response = await fetch(apiUrl, config);

  const objetoResposta = await response.json()

  console.log(response.status);
  console.log(objetoResposta);

  //Caso o Status da resposta seja 200, o login ocorreu com exito, caso o contrário, a funcao erroLogin é chamada.
  if(response.status != 200){
    erroLogin(objetoResposta.error_codes)
  }
  else{
    window.location.replace("home.html");
  }

}



//alguns codigos de erro retornados pelo ObjetoResposta condizem com um erro especíco, os quais sao tratados abaixo.
function erroLogin(erros){

  //pega o elemento que vai exibir o erro
  let errorMessage = document.getElementById('errorMessage');

  erros.forEach(e => {
    if (e == 900023){
      console.log("email nao valido");
      //Muda o conteudo com a mensagem de erro e torna visivel.
      errorMessage.innerHTML = 'Email não é valido';
      errorMessage.classList.remove("invisivel");
    }
    else if (e == 50034){
      errorMessage.innerHTML='Usuario não existe';
      errorMessage.classList.remove("invisivel");
      console.log("usuario não existe");
    }
    else if (e == 50126){
      errorMessage.innerHTML='Usuario ou senha incorretos';
      errorMessage.classList.remove("invisivel");
      console.log("usuario ou senha incorretos");
    }
    else{

      errorMessage.innerHTML='Algo deu errado, tende de novo.';
      errorMessage.classList.remove("invisivel");
      console.log("algun erro ocorreu");
    }

  });
}




//900023 email invalido
//50034 usuario nao existe
//50126 invalid username or password
