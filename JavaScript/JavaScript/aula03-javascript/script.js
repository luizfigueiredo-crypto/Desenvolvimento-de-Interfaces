const nome = document.querySelector('#nome');
const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const botao = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

function classificar(media) {
  if (media >= 7) return 'Aprovado';
  if (media >= 5) return 'Recuperacao';
  return 'Reprovado';
}

botao.addEventListener('click', () => {
  // 1. Ler o nome e verificar campos vazios.
  const estudante = nome.value.trim();
  if (!estudante || nota1.value === '' ||
      nota2.value === '' || nota3.value === '') {
    resultado.textContent = 'Preencha todos os campos.';
    return;
  }

  // 2. Converter os valores para numeros.
  const n1 = Number(nota1.value);
  const n2 = Number(nota2.value);
  const n3 = Number(nota3.value);

  // 3. Validar o intervalo de cada nota.
  const valores = [n1, n2, n3];
  const invalida = valores.some(nota =>
    Number.isNaN(nota) || nota < 0 || nota > 10
  );
  if (invalida) {
    resultado.textContent = 'Use notas entre 0 e 10.';
    return;
  }

  // 4. Calcular e classificar.
  const media = calcularMedia(n1, n2, n3);
  const situacao = classificar(media);

  // 5. Exibir o resultado na pagina.
  resultado.textContent =
    `${estudante}: media ${media.toFixed(1)}. ` +
    `Situacao: ${situacao}.`;
});
