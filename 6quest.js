//Crie uma função que receba um número n e retorne a soma de todos os números
//de 1 até n. Por exemplo, para n = 5, a função deve retornar 1 + 2 + 3 + 4 + 5 = 15.

function soma(a){
    let sum =  0;
    for(let i = 1;i <= a;i++){
        sum += i;
    } return sum;
}

console.log(soma(5));