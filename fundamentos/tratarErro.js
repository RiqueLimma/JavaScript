function tratarErroELancar(erro){
//throw new Error('...')
//throw 10
//throw true
//throw 'mensagem'
throw{
    nome: erro.name,
    msg: errp.message,
    date: new Date
}
}
function imprimirNomeGritado(obj){

    try{
        console.log(obj.name.toUpperrCase() + '!!!')
    } catch {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }

}
const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)

