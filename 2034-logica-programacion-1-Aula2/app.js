//Variables
let numeroSecreto = 4;
while (numeroUsuario != numeroSecreto) {


let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el número es: ${numeroUsuario}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('El número es menor');
        } else {
            alert('El número es mayor');
        }
        //La condicion, no se cumplio
        //alert('Lo siento no acertaste el numero');
    }
}