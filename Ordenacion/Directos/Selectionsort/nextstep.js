module.exports ={
    variables: {
        i: 0, // Índice de la iteración externa
        j: 1, // Índice de la iteración interna
        minIndex: 0, // Índice del mínimo encontrado
        colors: ["orange", "yellow", "red"], // Colores para cada barra
        sorted: false, // Indica si el arreglo ya está ordenado
        data: [30, 80, 45, 60, 20, 90, 50] // Datos a ordenar
    },
    nextstep: function(){
        const { variables } = this; // Acceder a las variables del objeto exportado

        if (variables.sorted) return; // Si ya está ordenado, no hacer nada

        if (variables.i >= variables.data.length - 1) {
            variables.sorted = true; // Marcar como ordenado
            renderGraphic(); // Actualizar el gráfico
            return;
        }

        // Comparar y actualizar el índice del mínimo
        if (variables.data[variables.j] < variables.data[variables.minIndex]) {
            variables.minIndex = variables.j; // Actualizar el índice del mínimo
        }

        variables.j++; // Avanzar al siguiente índice de la iteración interna

        if (variables.j === variables.data.length) {
            // Intercambiar los elementos data[i] y data[minIndex]
            [variables.data[variables.i], variables.data[variables.minIndex]] =
                [variables.data[variables.minIndex], variables.data[variables.i]];

            // Avanzar a la siguiente iteración externa
            variables.i++;
            variables.j = variables.i + 1;
            variables.minIndex = variables.i;
        }

        renderGraphic(); // Actualizar el gráfico
    }

};