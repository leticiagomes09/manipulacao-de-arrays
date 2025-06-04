let producao = ["mousepad", "placa de vídeo", "fonte de alimentação", "HD externo", "notebook gamer", "roteador"];
  
console.log("Antes do pop");
console.table(producao);

// Removendo o ultimo item 
let itemRemovido = producao.pop();

console.log("Depois do pop");
console.table(producao);

console.log("Item removido: ", itemRemovido);
