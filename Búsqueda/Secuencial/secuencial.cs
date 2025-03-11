using System;

class Program
{
    static void Main()
    {
        int[] arr = { 5, 3, 8, 4, 2 };
        int x = 4;
        int result = BusquedaSecuencial(arr, x);

        if (result == -1)
            Console.WriteLine("Elemento no encontrado en el arreglo.");
        else
            Console.WriteLine("Elemento encontrado en la posición: " + result);
    }

    static int BusquedaSecuencial(int[] arr, int x)
    {
        for (int i = 0; i < arr.Length; i++)
        {
            if (arr[i] == x)
                return i;
        }
        return -1;
    }
}