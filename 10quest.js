//Crie uma função que receba uma string e um caractere como parâmetros e retorne
//o número de vezes que o caractere aparece na string. Por exemplo,
//contarOcorrencias("javascript", "a") deve retornar 2.
function contarOcorrencias(word,letter){
    word = word.toLowerCase();
    letter = letter.toLowerCase();
    let cont = 0;
    for(let i = 0; i<word.length;i++){
        if(word[i] == letter){
            cont++;
        }
    }
    return cont;
}
console.log(contarOcorrencias("javAscrasAipt", "A"));