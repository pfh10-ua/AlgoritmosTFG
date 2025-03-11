module.exports ={
    variables: {
        indices:{
            i:0,
            j:1,
            minIndex:0
        },
        colors: ["orange", "yellow", "red"], // Colores para cada barra
        sorted: false, // Indica si el arreglo ya está ordenado
        data: [30, 80, 45, 60, 20, 90, 50] // Datos a ordenar
    },
    nextstep: function(){
        const { variables } = this; // Acceder a las variables del objeto exportado

        if (variables.sorted) return; // Si ya está ordenado, no hacer nada

        const {indices, data } = variables;

        if (indices.i >= data.length - 1) {
            variables.sorted = true; // Marcar como ordenado
            renderGraphic(variables); // Actualizar el gráfico
            return;
        }

        // Comparar y actualizar el índice del mínimo
        if (data[indices.j] < data[indices.minIndex]) {
            indices.minIndex = indices.j; // Actualizar el índice del mínimo
        }

        indices.j++; // Avanzar al siguiente índice de la iteración interna

        if (indices.j === data.length) {
            // Intercambiar los elementos data[i] y data[minIndex]
            [data[indices.i], data[indices.minIndex]] = [data[indices.minIndex], data[indices.i]];

            // Avanzar a la siguiente iteración externa
            indices.i++;
            indices.j = indices.i + 1;
            indices.minIndex = indices.i;
        }

        renderGraphic(variables); // Actualizar el gráfico
    }

};