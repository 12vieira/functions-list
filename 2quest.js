//Crie uma função que receba três números como parâmetros e retorne o maior
//deles. Não use funções prontas como Math.max, apenas comparações lógicas.


function maior(a,b,c){
    if(a > b && a > c){
        return a;
    } else if(b > a && b > c){
        return b;
    } else{
        return c;
    }
}

console.log(maior(9,7,23));