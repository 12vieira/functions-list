//Crie uma função que receba uma base e um expoente e retorne o valor da base
//elevada ao expoente, sem usar o método Math.pow. Utilize apenas um loop para
//multiplicações sucessivas.

function expo(base,exp){
    let result = 1;
    for (let i = 0;i<exp;i++){
        result *= base
    }
    return result;
}
console.log(expo(4,2));