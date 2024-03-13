function verificaFibonacci(numero){
    let fibonacci = [0, 1];
    let i = 1;

    while(fibonacci[i] <= numero){
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
        i++;
    }

    if (fibonacci.includes(numero)) {
        return console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        return console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
    }
}

verificaFibonacci(34)