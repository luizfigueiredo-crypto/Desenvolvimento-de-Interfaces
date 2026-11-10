const visorResultado = document.getElementById("resultado");
const visorHistorico = document.getElementById("historico");

let valorAtual = "0";
let valorAnterior = "";
let operador = null;
let reiniciarVisor = false;

const simbolos = { "+": "+", "-": "−", "*": "×", "/": "÷" };

function atualizarVisor() {
  visorResultado.textContent = valorAtual.replace(".", ",");

  if (operador !== null) {
    visorHistorico.textContent =
      valorAnterior.replace(".", ",") + " " + simbolos[operador];
  } else {
    visorHistorico.textContent = "";
  }
}

function adicionarNumero(numero) {
  if (valorAtual === "0" || reiniciarVisor) {
    valorAtual = numero;
    reiniciarVisor = false;
  } else {
    valorAtual += numero;
  }
  atualizarVisor();
}

function adicionarDecimal() {
  if (reiniciarVisor) {
    valorAtual = "0";
    reiniciarVisor = false;
  }
  if (!valorAtual.includes(".")) {
    valorAtual += ".";
  }
  atualizarVisor();
}

function escolherOperador(novoOperador) {
  if (operador !== null && !reiniciarVisor) {
    calcular();
  }
  operador = novoOperador;
  valorAnterior = valorAtual;
  reiniciarVisor = true;
  atualizarVisor();
}

function calcular() {
  if (operador === null) return;

  const a = parseFloat(valorAnterior);
  const b = parseFloat(valorAtual);
  let resultado;

  switch (operador) {
    case "+":
      resultado = a + b;
      break;
    case "-":
      resultado = a - b;
      break;
    case "*":
      resultado = a * b;
      break;
    case "/":
      if (b === 0) {
        valorAtual = "Erro";
        operador = null;
        valorAnterior = "";
        reiniciarVisor = true;
        atualizarVisor();
        return;
      }
      resultado = a / b;
      break;
  }

  resultado = parseFloat(resultado.toFixed(10));

  valorAtual = String(resultado);
  valorAnterior = "";
  operador = null;
  reiniciarVisor = true;
  atualizarVisor();
}

function limpar() {
  valorAtual = "0";
  valorAnterior = "";
  operador = null;
  reiniciarVisor = false;
  atualizarVisor();
}

function apagar() {
  if (reiniciarVisor || valorAtual === "Erro") {
    limpar();
    return;
  }
  valorAtual = valorAtual.length > 1 ? valorAtual.slice(0, -1) : "0";
  atualizarVisor();
}

function porcentagem() {
  if (valorAtual === "Erro") return;
  valorAtual = String(parseFloat(valorAtual) / 100);
  atualizarVisor();
}

document.querySelectorAll(".tecla").forEach(function (botao) {
  botao.addEventListener("click", function () {
    if (valorAtual === "Erro" && !botao.dataset.acao) {
      limpar();
    }

    if (botao.dataset.numero !== undefined) {
      adicionarNumero(botao.dataset.numero);
    } else if (botao.dataset.operador) {
      escolherOperador(botao.dataset.operador);
    } else if (botao.dataset.acao === "decimal") {
      adicionarDecimal();
    } else if (botao.dataset.acao === "igual") {
      calcular();
    } else if (botao.dataset.acao === "limpar") {
      limpar();
    } else if (botao.dataset.acao === "apagar") {
      apagar();
    } else if (botao.dataset.acao === "porcentagem") {
      porcentagem();
    }
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key >= "0" && e.key <= "9") adicionarNumero(e.key);
  else if (e.key === "." || e.key === ",") adicionarDecimal();
  else if (["+", "-", "*", "/"].includes(e.key)) escolherOperador(e.key);
  else if (e.key === "Enter" || e.key === "=") calcular();
  else if (e.key === "Backspace") apagar();
  else if (e.key === "Escape") limpar();
});

atualizarVisor();
