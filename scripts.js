//const fetch = require('node-fetch');

//const { URLSearchParams } = require('url');
const apiUrl = 'https://login.microsoftonline.com/be87ed09-e753-468f-8244-e2f3811ceacc/oauth2/v2.0/token';

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded', 
    'SdkVersion': 'postman-graph/v1.0'
}; 

// const body = new URLSearchParams();
// body.append('grent_type', 'password');
// body.append('userName', 'guildafront@FELChagashotmail.onmicrosoft.com');
// body.append('password', '94PgyhlUV7Te');

const data = {
    userName : 'guildafront@FELChagashotmail.onmicrosoft.com',
    password : '94PgyhlUV7Te'
};

const config = {
    method: 'POST', mode: 'no-cors', body: JSON.stringify(data), headers
};

fetch(apiUrl, config).then(res => res.json()).catch(res => console.error('houve um erro', res.message)).then(objetoResposta => console.log(objetoResposta));