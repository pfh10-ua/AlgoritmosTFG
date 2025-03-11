def busqueda_secuencial(arr, objetivo)
    arr.each_with_index do |elemento, indice|
        return indice if elemento == objetivo
    end
    nil
end

# Ejemplo de uso
arreglo = [5, 3, 8, 4, 2]
objetivo = 4
resultado = busqueda_secuencial(arreglo, objetivo)

if resultado
    puts "Elemento encontrado en el índice #{resultado}"
else
    puts "Elemento no encontrado"
end