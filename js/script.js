// Abrir configurações

const configuracoes = document.querySelector('#configs');
const modal = document.querySelector('.modal-configuracoes');

configuracoes.onclick = function() {
    this.classList.toggle('aberto');
    modal.classList.toggle('aberto');
}

// Scroll Reveal

window.sr = ScrollReveal({reset: true})

ScrollReveal().reveal('.texto1', {
    delay: 900,
    rotate: {
        x: 100,
        y: 0,
        z: 0
    }
});
ScrollReveal().reveal('.texto2', {
    delay: 900,
    rotate: {
        x: 100,
        y: 0,
        z: 0
    }
});
ScrollReveal().reveal('.texto3', {
    delay: 900,
    rotate: {
        x: 100,
        y: 0,
        z: 0
    }
});
ScrollReveal().reveal('.texto4', {
    delay: 900,
    rotate: {
        x: 100,
        y: 0,
        z: 0
    }
});

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

$(function() {
    $(".pt").click(function() {
        $(".a1").text("Sobre mim");
        $(".a2").text("Habilidades");
        $(".a3").text("Projetos");
        $(".a4").text("Contatos");
        $(".resumo-text").text("Olá, tudo bem? Eu sou o Gabriel");
        $(".developer-text").text("Desenvolvedor\nFull Stack Jr");
        $(".cv-text").text("Baixar CV");
        $(".titulo-sobre-mim").text("SOBRE");
        $(".titulo-blue").text("MIM");
        $(".conteudo-texto1").text("Tenho 18 anos e sempre tive contato com tecnologia. Meus estudos na área começaram em 2021 e, tenho certeza que, continuarei estudando por um bom tempo para ser capaz de sempre entregar melhores resultados e inovações.");
        $(".conteudo-texto2").text("Conclui o Ensino Médio no ano de 2021. Pretendo no futuro cursar Ciências da Computação ou Análise e Desenvolvimento de Sistemas.");
        $(".conteudo-texto3").text("No começo de 2022 iniciei meus estudo no Instituto Proa, algo que me orgulho muito. Lá desenvolvi várias habilidades que você verá mais para baixo. Hoje, já conclui meu curso e estou estudando através da Udemy e tutoriais no Youtube.");
        $(".conteudo-texto4").text("Falando um pouco sobre hobbies, os meus são: jogar basquete e futebol, assistir séries e podcasts, jogar games e escutar música.");
    });
});

$(function() {
    $(".en").click(function() {
        $(".a1").text("About me");
        $(".a2").text("Skills");
        $(".a3").text("Projects");
        $(".a4").text("Contact");
        $(".resumo-text").text("Hello, how are you? I’m Gabriel");
        $(".developer-text").text("Jr Full Stack\nDeveloper");
        $(".cv-text").text("Download CV");
        $(".titulo-sobre-mim").text("ABOUT");
        $(".titulo-blue").text("ME");
        $(".conteudo-texto1").text("I am 18 years old and have always had contact with technology. My studies in the area started in 2021 and, I'm sure, I will continue studying for a long time to be able to always deliver better results and innovations.");
        $(".conteudo-texto2").text("I finished high school in 2021. In the future I intend to study Computer Science or Systems Analysis and Development.");
        $(".conteudo-texto3").text("At the beginning of 2022 I started my studies at Instituto Proa, I am very proud of this. In this period I developed several skills that you will see below. Today, I have completed my course and I am studying through Udemy and YouTube tutorials.");
        $(".conteudo-texto4").text("Talking a little about hobbies, mine are: playing basketball and football, watching series and podcasts, playing games and listening to music.");
    });
});

// Mudança de tema

const btn = document.querySelector('.btn');
const tema = document.querySelector('.tema');
const body = document.querySelector('body');
const header = document.querySelector('header');
const nameTag = document.querySelector('.name-tag');
const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const a4 = document.querySelector('.a4');
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const resumoText = document.querySelector('.resumo-text');
const stack1 = document.querySelector('.stack1');
const stack2 = document.querySelector('.stack2');
const stack3 = document.querySelector('.stack3');
const cv = document.querySelector('.cv');
const tituloSobreMim = document.querySelector(".titulo-sobre-mim");
const conteudoTexto1 = document.querySelector(".conteudo-texto1");
const conteudoTexto2 = document.querySelector(".conteudo-texto2");
const conteudoTexto3 = document.querySelector(".conteudo-texto3");
const conteudoTexto4 = document.querySelector(".conteudo-texto4");

btn.onclick = function() {
    this.classList.toggle('escuro');
    light.classList.toggle('escuro');
    dark.classList.toggle('escuro');
    tema.classList.toggle('escuro');
    body.classList.toggle('escuro');
    header.classList.toggle('escuro');
    nameTag.classList.toggle('escuro');
    a1.classList.toggle('escuro');
    a2.classList.toggle('escuro');
    a3.classList.toggle('escuro');
    a4.classList.toggle('escuro');
    resumoText.classList.toggle('escuro');
    stack1.classList.toggle('escuro');
    stack2.classList.toggle('escuro');
    stack3.classList.toggle('escuro');
    cv.classList.toggle('escuro');
    tituloSobreMim.classList.toggle('escuro');
    conteudoTexto1.classList.toggle('escuro');
    conteudoTexto2.classList.toggle('escuro');
    conteudoTexto3.classList.toggle('escuro');
    conteudoTexto4.classList.toggle('escuro');
}