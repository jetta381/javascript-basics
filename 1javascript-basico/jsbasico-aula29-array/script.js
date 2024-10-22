const alunos = ['Luiz', 'Maria', 'Joao'];
alunos.push('Luiza', 'Roberto');

console.log(typeof(alunos));
console.log(alunos instanceof Array); //verificando se a variavel é um array

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]

// console.log(alunos.slice(0, -2)); //elimina os 2 indices finais -2

// const removido = alunos.shift();
// console.log(removido);

// alunos.unshift('Rodrigo');
// alunos.unshift('Gil');

// alunos.push('Luiza');
// alunos.push('Fabio');

// alunos[alunos.length] = 'Mario';
// alunos[alunos.length] = 'Jose';
// alunos[alunos.length] = 'Robson';

// alunos[0] = 'Eduardo'; 
// console.log(alunos[2]);
// console.log(alunos[0]);