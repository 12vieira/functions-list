//Crie uma função que receba uma string como parâmetro e retorne o número de
//vogais (a, e, i, o, u) presentes na string, independentemente de serem maiúsculas
//ou minúsculas.

function vogal(a){
    let cont = 0;
    a = a.toLowerCase();
    for(let i = 0;i < a.length;i++){
        if (a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u'){
            cont++         
        }
    }return cont;
    
}
console.log(vogal('CASAMento'));