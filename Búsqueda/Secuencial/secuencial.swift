import Foundation

func busquedaSecuencial(_ arreglo: [Int], _ objetivo: Int) -> Int? {
    for (indice, elemento) in arreglo.enumerated() {
        if elemento == objetivo {
            return indice
        }
    }
    return nil
}

// Ejemplo de uso
let numeros = [4, 2, 7, 1, 9, 3]
if let indice = busquedaSecuencial(numeros, 7) {
    print("Elemento encontrado en el índice \(indice)")
} else {
    print("Elemento no encontrado")
}