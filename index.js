let Numero = () => {
    var num = parseInt(prompt("ingrese un numero entre 1 y 20"));
    if (num>=1 && num<=20){
        return num
    } else {
        alert("número fuera de rango")
    }
}
var num = Numero();
console.log("su número ingresado es: "+num); // control de numero
for (let i=1; i<=num; i++) {
    let producto = i*num;
    console.log(i + " x "+num +" = " +producto);
    }
for (let i = 1; i <= num; i++) {
    let res = 1;
    for (let j= 1; j <= i; j++) {
    res = res * j;
    }
    console.log("Factorial de " + i + " es: " + res);
    }