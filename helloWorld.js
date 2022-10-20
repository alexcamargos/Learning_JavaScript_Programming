// Hello World!
//
// In Computer Science the first program many students create is a simple one
// that outputs an iconic line of text: "Hello World!"
// Say hello to the world of computer science with this introductory activity
// that equips students with the basic coding skills and confidence to create apps.

var myNames = ["Alex", "Jessy", "Pitucha"];

print = console.log;

function helloWorld(name) {
  print("Hello, " + name + "!");
}

for (let name of myNames) {
  helloWorld(name);
}
