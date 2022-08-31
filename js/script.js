// Abrir configurações

const configuracoes = document.querySelector('#configs');
const modal = document.querySelector('.modal-configuracoes');

configuracoes.onclick = function() {
    this.classList.toggle('aberto');
    modal.classList.toggle('aberto');
}

// Mudança de idioma

const pt = document.querySelector('.pt');
const en = document.querySelector('.en');

pt.onclick = function() {
    this.classList.toggle('selecionado');
    en.classList.remove('selecionado');
}

en.onclick = function() {
    this.classList.toggle('selecionado');
    pt.classList.remove('selecionado');
}

// Mudança de tema

const btn = document.querySelector('.btn');
const tema = document.querySelector('.tema');
const body = document.querySelector('body');
const nameTag = document.querySelector('.name-tag');
const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const a4 = document.querySelector('.a4');
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");

btn.onclick = function() {
    this.classList.toggle('escuro');
    light.classList.toggle('escuro');
    dark.classList.toggle('escuro');
    tema.classList.toggle('escuro');
    body.classList.toggle('escuro');
    nameTag.classList.toggle('escuro');
    a1.classList.toggle('escuro');
    a2.classList.toggle('escuro');
    a3.classList.toggle('escuro');
    a4.classList.toggle('escuro');
}