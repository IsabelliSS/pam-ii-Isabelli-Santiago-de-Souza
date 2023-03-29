//função retorna algo e metodo retorna nada

function msgTeste(){
    console.log("Funcionou minha funcão")
}
msgTeste()

function msgTesteArgumento(param){
    console.log("O parâmetro passado foi:", param, "e o tipo dele é", typeof param)
}
msgTesteArgumento("Olá")
msgTesteArgumento(4)

function Soma(n1, n2) {
    let result = "oi"

    if(typeof n1=="number" && typeof n2=="number"){
        return result = n1+n1
    }
    // } else{
    //     return result = "Deu bom não"       
    // }
    return "Deu bom não"

    // try{
    //     return result = n1+n2
    //     typeof result !== Number ? result : "Erro"
    // } catch(e){
    //     return e
    // }
}

console.log(Soma(4, 7))
console.log(Soma("oi", 7))

const funcaoArrow = () => {
    console.log("Isso é um Arrow function!")
}
funcaoArrow()