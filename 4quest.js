//. Crie uma função que receba uma string como parâmetro e retorne a string invertida.
//Por exemplo, ao passar "casa", a função deve retornar "asac"

function inverse(a){
    let tam = a.length;
    let word = [tam];
    let aux = 0;
    for(let i = tam-1;i >= 0;i--){
        word[aux] = a[i];
        aux++
    }return word;
    
}

console.log(inverse('casa'));