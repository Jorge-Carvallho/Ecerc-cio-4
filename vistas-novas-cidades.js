const turista = prompt("Qual seu nome: ");

let cidades = "";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade? (Sim/Não): ");

while (continuar === "Sim") {
  let cidade = prompt(" Qual a cidade visitada? ");
  cidades += "." + cidade + "\n";
  contagem++;
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}
alert(
  "Turista: " +
    turista +
    "\n Quantidade de cidades visitadas foram: " +
    contagem +
    "\n Cidades visitadas foram:\n" +
    cidades
);
