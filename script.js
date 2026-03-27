var listaDeFrutas = ["Zarak", "Mago", "Cansado", "Rafinha", "Iguin"];

var primeiroItem = [listaDeFrutas[0]];

var segundoItem = [listaDeFrutas[1]];

var terceiroItem = [listaDeFrutas[2]];

var quartoItem = [listaDeFrutas[3]];

var quintoItem = [listaDeFrutas[4]];

var pos = listaDeFrutas.indexOf("Rafinha");

listaDeFrutas.push("Magola");
listaDeFrutas.push("Zé");
listaDeFrutas.push("Zé do Caixão");
listaDeFrutas.shift;
listaDeFrutas.shift;
listaDeFrutas.pop();
listaDeFrutas.pop();
listaDeFrutas.splice(pos, 3);
const myArray = ['a', 'b', 'c'];
const elementoInserido = 'x';
const posicao = 3;



const Nome = window.prompt("Digite o seu nome: ");
const Idade = window.prompt("Digite a sua idade: ");
const Posicao = 1;
const Array = [Nome, Idade];
Array.splice(Posicao, 0, window.prompt("Digite o seu nome: "));
Array.splice(Posicao, 0, window.prompt("Digite a sua idade: "));

Array.splice(Posicao, 0, window.prompt("Digite o seu nome: "));
Array.splice(Posicao, 0, window.prompt("Digite a sua idade: "));



console.log(Array);




myArray.splice(posicao, 0, elementoInserido);
console.log(listaDeFrutas);
console.log(segundoItem);
console.log(terceiroItem);
console.log(primeiroItem);
console.log(quintoItem);
console.log(quartoItem);
console.log(pos);
window.alert(listaDeFrutas);

document.writeln(listaDeFrutas);
document.writeln(myArray);

