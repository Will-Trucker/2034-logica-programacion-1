//Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
while (numeroUsuario != numeroSecreto) {

prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el número es: ${numeroUsuario}`); // Template Strings
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //La condicion, no se cumplio
        //alert('Lo siento no acertaste el numero');
    }
}