fn busqueda_secuencial(arr: &[i32], objetivo: i32) -> Option<usize> {
    for (indice, &elemento) in arr.iter().enumerate() {
        if elemento == objetivo {
            return Some(indice);
        }
    }
    None
}

fn main() {
    let arreglo = [1, 2, 3, 4, 5];
    let objetivo = 3;

    match busqueda_secuencial(&arreglo, objetivo) {
        Some(indice) => println!("Elemento encontrado en el índice: {}", indice),
        None => println!("Elemento no encontrado en el arreglo"),
    }
}