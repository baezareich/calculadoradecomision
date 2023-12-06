while (true) {
    let nombreVendedor = prompt("Bienvenido, Por favor ingrese el número del vendedor según corresponda: 1. Daniel Baeza 2. Eliana Sanchez");

    let nombreConvertido = parseInt(nombreVendedor);

    if (nombreConvertido === 1) {
        alert("El vendedor seleccionado es: Daniel Baeza");
    } else if (nombreConvertido === 2) {
        alert("El vendedor seleccionado es: Eliana Sanchez");
    } else {
        alert("Por favor ingrese un número válido (1 o 2)");
        continue;
    }

    let valorVenta = parseInt(prompt("Por favor ingrese el valor de la venta en pesos"));
    let valorEnvio = parseInt(prompt("Ahora ingrese el valor del envío del producto"));

    let comisionVendedor = valorVenta - valorEnvio;

    if (nombreConvertido === 1) {
        let comi1 = comisionVendedor * 0.05;
        alert(comi1 + " es la comisión calculada para el vendedor");
    } else if (nombreConvertido === 2) {
        let comi2 = comisionVendedor * 0.04;
        alert(comi2 + " es la comisión calculada para el vendedor");
    } else {
        alert("Error inesperado");
    }

    alert("Hasta luego");
    
}