module.exports ={
    variables: {
        indices:{
            i:0,
            j:1,
            minIndex:0
        },
        colors: ["orange", "yellow", "red"], // Colores para cada barra
        sortedOrFind: false, // Indica si el arreglo ya está ordenado
        data: [30, 80, 45, 60, 20, 90, 50], // Datos a ordenar
        lineaActual: {
            cpp: 8, 
            py: 9, 
            js: 8
        }, // Línea actual de ejecución
        language: "" // Lenguaje de programación
    },
    nextstep: function(){
        const { variables } = this; // Acceder a las variables del objeto exportado

        if (variables.sortedOrFind) return; // Si ya está ordenado, no hacer nada

        const {indices, data, language } = variables;

        if (indices.i >= data.length - 1) {
            variables.sortedOrFind = true; // Marcar como ordenado
            variables.lineaActual[language] = this.getFinalLine(language); //Línea final
            return;
        }

        // Comparar y actualizar el índice del mínimo
        if (data[indices.j] < data[indices.minIndex]) {
            indices.minIndex = indices.j; // Actualizar el índice del mínimo
            variables.lineaActual[language] = this.getUpdateMinIndexLine(language); //Actualización del minimo
        }
        else {
            variables.lineaActual[language] = this.getDefaultComparisonLine(language); //Comparación por defecto
        }

        indices.j++; // Avanzar al siguiente índice de la iteración interna

        if (indices.j === data.length) {
            // Intercambiar los elementos data[i] y data[minIndex]
            [data[indices.i], data[indices.minIndex]] = [data[indices.minIndex], data[indices.i]];

            // Avanzar a la siguiente iteración externa
            indices.i++;
            indices.j = indices.i + 1;
            indices.minIndex = indices.i;
            variables.lineaActual[language] = this.getSwapLine(language); // Intercambio
        }
    },
    getFinalLine: function (language) {
        switch (language) {
            case 'cpp': return 15;
            case 'py': return 17;
            default: return '-';
        }
    },
    getUpdateMinIndexLine: function (language) {
        switch (language) {
            case 'cpp': return [9,10];
            case 'py': return [13,14];
            default: return '-';
        }
    },
    getDefaultComparisonLine: function (language) {
        switch (language) {
            case 'cpp': return 8;
            case 'py': return 12;
            default: return '-';
        }
    },
    getSwapLine: function (language) {
        switch (language) {
            case 'cpp': return 13;
            case 'py': return 16;
            default: return '-';
        }
    }

};