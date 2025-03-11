function busqueda_secuencial(arr: number[], objetivo: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === objetivo) {
            return i; // Devuelve el índice donde se encuentra el objetivo
        }
    }
    return -1; // Devuelve -1 si el objetivo no se encuentra en el arreglo
}

// Ejemplo de uso
const array = [5, 3, 8, 4, 2];
const objetivoBusqueda = 4;
const resultadoBusqueda = busqueda_secuencial(array, objetivoBusqueda);

if (resultadoBusqueda !== -1) {
    console.log(`Elemento encontrado en el índice: ${resultadoBusqueda}`);
} else {
    console.log('Elemento no encontrado en el arreglo');
}