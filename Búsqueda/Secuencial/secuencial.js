function busquedaSecuencial(arr, objetivo) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === objetivo) {
            return i; // Devuelve el índice donde se encuentra el objetivo
        }
    }
    return -1; // Devuelve -1 si el objetivo no se encuentra en el arreglo
}

// Ejemplo de uso
const arreglo = [5, 3, 8, 4, 2];
const objetivo = 4;
const resultado = busquedaSecuencial(arreglo, objetivo);

if (resultado !== -1) {
    console.log(`Elemento encontrado en el índice ${resultado}`);
} else {
    console.log('Elemento no encontrado');
}