//const fetch = require('node-fetch');

//const { URLSearchParams } = require('url');
const apiUrl = 'https://login.microsoftonline.com/be87ed09-e753-468f-8244-e2f3811ceacc/oauth2/v2.0/token';

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded', 
    'SdkVersion': 'postman-graph/v1.0'
}; 

const body = new URLSearchParams();
body.append('grant_type', 'password');
body.append('client_id', '682aac27-6b4b-4f13-a4f9-21f8b0f30f08');
body.append('client_secret', '.C=T8S7[XpPu0qY-HTPcUgVObr4=bHUF');
body.append('scope', 'https://graph.microsoft.com/.default');
body.append('userName', 'guildafront@FELChagashotmail.onmicrosoft.com');
body.append('password', '94PgyhlUV7Te');



const config = {
    method: 'POST', body, headers
};

fetch(apiUrl, config).then(res => res.json()).catch(res => console.error('Houve um erro: ', res.message)).then(objetoResposta => console.log(objetoResposta));