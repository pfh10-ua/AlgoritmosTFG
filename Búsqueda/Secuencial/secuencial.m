#import <Foundation/Foundation.h>

int busquedaSecuencial(NSArray *array, NSNumber *elemento) {
    for (int i = 0; i < [array count]; i++) {
        if ([array[i] isEqualToNumber:elemento]) {
            return i;
        }
    }
    return -1;
}

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSArray *array = @[@1, @2, @3, @4, @5];
        NSNumber *elemento = @3;
        int resultado = busquedaSecuencial(array, elemento);
        
        if (resultado != -1) {
            NSLog(@"Elemento encontrado en el índice %d", resultado);
        } else {
            NSLog(@"Elemento no encontrado");
        }
    }
    return 0;
}