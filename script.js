console.log("Boa noite!")

// Loop Simples - Contagem de 1 a 10
for(let i = 1; i <= 5; i++){
   console.log(i)
}

// Loop - Números Pares de 1 a 20
for(let i = 1; i <= 10; i += 2){
  console.log(i)
}

// while
// Contagem Decrescente
let i = 5

while(i > 0){
  console.log(i)
  i--
}


let iphone = 1

while(iphone <= 16){
   console.log("iphone" + iphone)
   iphone++
}

// OPERADORES LÓGICOS

// && (and) Seu resultado é true se ambos os valores forem verdadeiros.
// || (or) Produz um valor true se qualquer um dos valores for verdadeiro.

// &&     (true && true) vou para a praia
// ||     (false || false) vou para a praia

// &&
let login = "vi"
let senha = 1234

if (login == "vini" && senha == 1234){
    console.log("Acesso Liberado")
}else{
    console.log("Acesso Negado")
}

// ||

let diaLindo = true
let disposto = true

if(diaLindo || disposto){
  console.log("Vou para a Praia")
}else{
    console.log("Não deu praia")
}

// Operadores de atribuição

// +
// -
// *
// /
// ++
// --
