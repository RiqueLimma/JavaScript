//par nome/valor
const saudacao = "Opa" // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao;
}

//Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Luis',
    idade: 27,
    peso: 60,
    edereco: {
        logradouro: ' Rua Não interresa',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);