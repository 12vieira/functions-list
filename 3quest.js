//Crie uma função que receba um número inteiro positivo e retorne o fatorial desse
//número. Não utilize recursão, apenas um loop simples

function fatorial(a){
    let fat =  1;
    for(let i = 1;i <= a;i++){
        fat *= i;
    } return fat;
}

console.log(fatorial(5));