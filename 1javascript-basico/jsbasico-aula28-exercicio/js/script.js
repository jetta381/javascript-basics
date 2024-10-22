const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const textoBody = document.getElementById('texto');

numeroTitulo.innerHTML = `<h1>O seu número é ${numero}</h1>` ;
textoBody.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
textoBody.innerHTML += `<p>${numero} é inteiro?: ${Number.isInteger(numero)}</p>`;
textoBody.innerHTML += `<p>${numero} é NaN?: ${Number.isNaN(numero)}</p>`;
textoBody.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
textoBody.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
textoBody.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;