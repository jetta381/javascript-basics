const nome = prompt('Digite o seu nome');
let lenghtName = nome.length;
let twoLetterName = nome[1];
let firstIndice = nome.indexOf(nome);
let lastIndice = nome.lastIndexOf(nome);

document.body.innerHTML =  `<h3>Seu nome é: ${nome}</h3>`;
document.body.innerHTML += `<h3>Seu nome tem: ${lenghtName} letras</h3>`;
document.body.innerHTML += `<h3>A segunda letra do seu nome é: ${twoLetterName}</h3>`;
document.body.innerHTML += `<h3>Qual o primeiro índice da letra ${nome[0]} no seu nome?: ${firstIndice}</h3>`;
document.body.innerHTML += `<h3>Qual o último índice no seu nome?: ${lastIndice}</h3>`;
document.body.innerHTML += `<h3>Qual as ultimas três letras no seu nome?: ${nome.slice(-3)}</h3>`;
document.body.innerHTML += `<h3>As palavras do seu nome são: ${nome.split(' ')}</h3>`;
document.body.innerHTML += `<h3>Seu nome com letras maiúsculas: ${nome.toUpperCase()}</h3>`;
document.body.innerHTML += `<h3>Seu nome com letras minúsculas: ${nome.toLowerCase()}</h3>`;
