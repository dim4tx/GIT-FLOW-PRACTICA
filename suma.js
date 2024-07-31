function suma(){
    let num1 = parseInt(prompt("Ingrese un numero entero"));
    let num2 = parseInt(prompt("Ingrese otro numero entero"));
    
    let resultado = num1 +num2;
    
    console.log("El resultado de la suma de los dos numeros ingreson es: "+ resultado);
    }
    
    for (let i = 0; i < 5; i++) {
        suma(i)
    }