// 66 Exercício - Criando um timer com setInterval

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    timeZone: "GMT",
  });
}

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
  relogio.classList.remove('pausado');
  iniciar.classList.add('clicado');
  pausar.classList.remove('clicado');
}

function pausaRelogio() {
  clearInterval(timer);
  relogio.classList.add('pausado');
  iniciar.classList.remove('clicado');
  pausar.classList.add('clicado');
}

function zeraRelogio() {
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
  segundos = 0;
  iniciar.classList.remove('clicado');
  pausar.classList.remove('clicado');
  relogio.classList.remove('pausado');
}

console.log(criaHoraDosSegundos(0));
iniciar.addEventListener("click", function (event) {
  clearInterval(timer);
  iniciaRelogio();
});

pausar.addEventListener("click", function (event) {
  pausaRelogio();
});

zerar.addEventListener("click", function (event) {
  zeraRelogio();
});
