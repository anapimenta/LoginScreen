(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const apiUrl = 'https://login.microsoftonline.com/be87ed09-e753-468f-8244-e2f3811ceacc/oauth2/v2.0/token';

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded', 
    'SdkVersion': 'postman-graph/v1.0'
}; 

const config = {
    method: 'post', mode: 'no-cors', body, headers
};

fetch(apiUrl, config).then(res => res.json()).catch(res => console.error('houve um erro', res.message)).then(objetoResposta => console.log(objetoResposta));
},{}]},{},[1]);
