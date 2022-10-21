// Crie uma classe para representar carros.
// Crie 3 carros, usando a classe.
//
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Quilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
// gasto em reais para realizar este percurso.

print = console.log;

const fuelPrice = 5.09;
const distanceTravelled = 100;

class Car {
  // Representação genérica de um carro.
  constructor(brand, color, fuelConsumption) {
    this.brand = brand;
    this.color = color;
    this.fuelConsumption = fuelConsumption;
  }

  calculateTravelCost(distance, fuelPrice) {
    // Calcula o custo de uma viagem.
    return distance * this.fuelConsumption * fuelPrice;
  }
}

// Main
(function () {
  // Instancia 3 carros.
  let uno = new Car("Fiat", "Vermelho", 0.144);
  let gol = new Car("Volkswagen", "Preto", 0.152);
  let hb20 = new Car("Hyundai", "Prata", 0.139);

  // Imprime o custo de cada viagem.
  print(
    `Esta viagem custará: R$${uno
      .calculateTravelCost(distanceTravelled, fuelPrice)
      .toFixed(2)}`
  );
  print(
    `Esta viagem custará: R$${gol
      .calculateTravelCost(distanceTravelled, fuelPrice)
      .toFixed(2)}`
  );
  print(
    `Esta viagem custará: R$${hb20
      .calculateTravelCost(distanceTravelled, fuelPrice)
      .toFixed(2)}`
  );
})();
