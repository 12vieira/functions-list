// Crie uma função que receba dois números como parâmetros e retorne true se o
// primeiro número for divisível pelo segundo, e false caso contrário. A função deve
// usar o operador de módulo (%).

function division(a,b){
    if(a % b === 0){
        return true;
    }
    return false;
}

console.log(division(4,2));