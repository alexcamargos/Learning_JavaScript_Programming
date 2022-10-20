// Número primo é qualquer número p cujo conjunto dos divisores não inversíveis não é vazio,
// e todos os seus elementos são produtos de p por números inteiros inversíveis.
// De acordo com esta definição, 0, 1 e - 1 não são números primos.
// Números primos que se encontram entre 1 e 100, que são:
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 e 97.

print = console.log;

function isPrime(num) {
  // Esta função determina se um determinando número é primo ou não.
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function sumPrimes(num) {
  // Esta função retorna a soma de todos os números primos entre 1 e num.
  let sum = 0;

  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

function range(start, end) {
  // Esta função retorna um array com todos os números entre start e end.
  return Array.from({ length: end - start + 1 }, (_, i) => i);
}

// Qual é a soma dos números primos entre 1 e 15?
print(sumPrimes(15));

// Quais sãos os números são primos entre 1 e 20.
range(1, 20).forEach((num) => {
  isPrime(num) ? print(`${num} é primo`) : print(`${num} não é primo`);
});

// Quais são os números primos entre 1 e 100?
let numeros = range(1, 100);
let primos = numeros.filter(isPrime);
print(primos);
