module.exports ={
    variables: {
        indices:{
            i:1,
            j:0,
            key:12 //Valor que ocupa data[i]
        },
        colors: ["orange", "blue"], // Colores para cada barra
        sortedOrFind: false, // Indica si el arreglo ya está ordenado
        data: [30, 12, 45, 60, 20, 90, 50], // Datos a ordenar
        lineaActual: {
            cpp: 8, 
            py: 9
        }, // Línea actual de ejecución
        language: "" // Lenguaje de programación
    },
    nextstep: function(){
        const { variables } = this; // Acceder a las variables del objeto exportado

        if (variables.sortedOrFind) return; // Si ya está ordenado, no hacer nada

        const {indices, data, language } = variables;

        if (indices.i >= data.length) {
            variables.sortedOrFind = true; // Marcar como ordenado
            variables.lineaActual[language] = this.getFinalLine(language); //Línea final
            return;
        }

        if (indices.j >= 0 && indices.key < data[indices.j]) {
            data[indices.j + 1] = data[indices.j];
            indices.j--;
            variables.lineaActual[language] = this.getMoveToRight(language);
        }
        else {
            data[indices.j + 1] = indices.key //Inserta en el sitio
            // Avanzar a la siguiente iteración externa
            indices.i++;
            indices.key = data[indices.i]
            indices.j = indices.i - 1;
            variables.lineaActual[language] = this.getInsertAndNewValues(language); // Intercambio
        }
    },
    getFinalLine: function (language) {
        switch (language) {
            case 'cpp': return 18;
            case 'py': return 17;
            default: return '-';
        }
    },
    getMoveToRight: function (language) {
        switch (language) {
            case 'cpp': return [11,12,13,14];
            case 'py': return [13,14];
            default: return '-';
        }
    },
    getInsertAndNewValues: function (language) {
        switch (language) {
            case 'cpp': return [7,8,16];
            case 'py': return 16;
            default: return '-';
        }
    }

};