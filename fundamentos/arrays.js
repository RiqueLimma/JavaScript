const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores)
console.log(valores.length) //length vai dizer quantos elementos tem numa array

valores.push({id:3}, false, null, 'teste'); // push vai acrescentar e 'id' significa elemento
console.log(valores); // imprimir no console

console.log(valores.pop()) //pop vai tirar a ultima array
delete valores[0] //vai tirar a primeira array

console.log(typeof valores)//nessa linha vai dizer que a array e um objeto



