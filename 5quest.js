//Crie uma função que receba um número inteiro e retorne true se ele for um número
//primo e false caso contrário. Lembre-se de que um número primo é divisível apenas
//por 1 e por ele mesmo

function primo(a){
    let cont = 0;
    for(let i = 2; i <= a; i++){
        if(a % i === 0){
            cont++;
        }
    } if (cont === 1){
        return true;
    } 
        return false;    
}

console.log(primo(73));