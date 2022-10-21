// Crie uma classe para representar pessoas.
// Crie 3 pessoas, usando a classe.
//
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
//
// Instancie uma pessoa chamada José Maria que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;

print = console.log;

class Person {
  // Representa uma pessoa.
  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.imc = this.calculateIMC();
  }

  calculateIMC() {
    // Calcula o IMC da pessoa.
    return this.weight / (this.height * this.height);
  }
}

function classificaIMC(imc) {
  // Classifica o IMC de acordo com a tabela da OMS.
  if (imc < 18.5) {
    return "abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "com peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "com sobrepeso";
  } else if (imc >= 30 && imc <= 34.9) {
    return "com obesidade grau 1";
  } else if (imc >= 35 && imc <= 39.9) {
    return "com obesidade grau 2";
  } else {
    return "com obesidade grau 3";
  }
}

// Main
(function () {
  // Instancia 34pessoas.
  let person1 = new Person("José Maria", 70, 1.75);
  let person2 = new Person("John Doe", 79, 1.55);
  let person3 = new Person("Anna Smith", 60, 1.85);
  let person4 = new Person("Peter Jones", 60, 1.85);

  // Imprime o IMC de cada pessoa.
  print(
    `O IMC de ${person1.name} é ${person1.imc.toFixed(
      2
    )} e ele está ${classificaIMC(person1.imc)}.`
  );
  print(
    `O IMC de ${person2.name} é ${person2.imc.toFixed(
      2
    )} e ela está ${classificaIMC(person2.imc)}.`
  );
  print(
    `O IMC de ${person3.name} é ${person3.imc.toFixed(
      2
    )} e ele está ${classificaIMC(person3.imc)}.`
  );
  print(
    `O IMC de ${person4.name} é ${person4.imc.toFixed(
      2
    )} e ele está ${classificaIMC(person4.imc)}.`
  );
})();
