section .data
    array db 5, 10, 15, 20, 25, 30, 35, 40, 45, 50
    array_len equ 10
    target db 25
    not_found_msg db "Elemento no encontrado", 0
    found_msg db "Elemento encontrado en el índice: ", 0

section .bss
    index resb 1

section .text
    global _start

_start:
    mov ecx, array_len
    mov esi, array
    mov al, [target]
    xor edi, edi

search_loop:
    cmp byte [esi + edi], al
    je found
    inc edi
    loop search_loop

not_found:
    mov edx, len not_found_msg
    mov ecx, not_found_msg
    call print_string
    jmp exit

found:
    mov [index], edi
    mov edx, len found_msg
    mov ecx, found_msg
    call print_string
    movzx eax, byte [index]
    call print_number

exit:
    mov eax, 1
    xor ebx, ebx
    int 0x80

print_string:
    mov eax, 4
    mov ebx, 1
    int 0x80
    ret

print_number:
    add eax, '0'
    mov [num], al
    mov edx, 1
    mov ecx, num
    call print_string
    ret

section .data
    num db 0