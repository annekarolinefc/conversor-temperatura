/*
Conversor de Temperaturas entre Farenheit e celcius
*/

var celsius = prompt("Digite o valor em Celsius que você deseja converter para Fahrenheit: ")
var fahrenheit = (celsius* 1,8) + 32;

alert("O valor de " + celsius +" celsius em fahrenheit é de " + fahrenheit.toFixed(2))