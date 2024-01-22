function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

// Exemplo de uso:
ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados: 1, 3, 5"


//Tentativa de criar uma variável para receber e amrzenar os números para ordenar
//
//let numerosRecebidos = prompt('Olá! Digite os números, separados por vírgula (ex. 1, 2, 3): ');
//
// function ordenarNumeros(a, b, c) {
//     const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
//     console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
// }

