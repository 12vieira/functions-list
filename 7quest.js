//Crie uma função que receba um array de números e retorne um objeto contendo o
//valor mínimo e o valor máximo do array. Exemplo: encontrarMinMax([3, 7, 1, 9, 4])
//deve retornar { min: 1, max: 9 }

function  encontrarMinMax(a){
    let max = a[0];
    let min = a[0];
    for(let i = 0;i < a.length ;i++){
        if(a[i] > max){
            max = a[i];
        } else if(a[i] < min){
            min = a[i];
        }
    } return `{min: ${min}, max: ${max}}`;
}

console.log(encontrarMinMax([3,7,1,9,4]));