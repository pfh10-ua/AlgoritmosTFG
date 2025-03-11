public class secuencial {

    public static int busquedaSecuencial(int[] arreglo, int elemento) {
        for (int i = 0; i < arreglo.length; i++) {
            if (arreglo[i] == elemento) {
                return i; // Retorna el índice donde se encuentra el elemento
            }
        }
        return -1; // Retorna -1 si el elemento no se encuentra en el arreglo
    }

    public static void main(String[] args) {
        int[] arreglo = {5, 3, 7, 1, 4, 9, 2};
        int elemento = 4;
        int resultado = busquedaSecuencial(arreglo, elemento);

        if (resultado != -1) {
            System.out.println("Elemento encontrado en el índice: " + resultado);
        } else {
            System.out.println("Elemento no encontrado en el arreglo.");
        }
    }
}