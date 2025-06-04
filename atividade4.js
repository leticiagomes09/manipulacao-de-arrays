let inscritos = ["Pedro", "Larissa", "João", "Amanda", "Lucas", "Mariana"];
  
console.log("Antes do pop");
console.table(inscritos);

// Removendo a ultima inscrição 
let inscricaoRemovida = inscritos.pop();

console.log("Depois do pop");
console.table(inscritos);

console.log("Inscrição removida: ", inscricaoRemovida);
