//Código que se ejecutara para cada paso del algoritmo
function nextStep() {
    if (sorted) return; // Si ya está ordenado, no hacer nada
  
    if (globalVariables.i >= data.length - 1) { // Si ya se completaron todas las iteraciones
      sorted = true; // Marcar el arreglo como ordenado
      renderGraphic(); // Actualizar el gráfico
      return;
    }
  
    // Comparar y actualizar el índice del mínimo
    if (data[globalVariables.j] < data[globalVariables.minIndex]) {
      globalVariables.minIndex = globalVariables.j; // Actualizar el índice del mínimo encontrado 
    }
  
    globalVariables.j++;
  
    if (globalVariables.j === data.length) { // Si se completó la iteración interna
      // Intercambiar los elementos data[i] y data[minIndex]
      const temp = data[globalVariables.i];
      data[globalVariables.i] = data[globalVariables.minIndex];
      data[globalVariables.minIndex] = temp;
  
      // Avanzar a la siguiente iteración externa
      //console.log("Antes de finalizar bucle j: i->" + globalVariables.i + " j->" + globalVariables.j + " min->" + globalVariables.minIndex);
      globalVariables.i++;
      globalVariables.j = globalVariables.i + 1;
      globalVariables.minIndex = globalVariables.i;
      //console.log("Despues de finalizar bucle j: i->" + globalVariables.i + " j->" + globalVariables.j + " min->" + globalVariables.minIndex);
    }
    renderGraphic(); // Actualizar el gráfico
}