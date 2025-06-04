let menuNavegacao = [
    "Início",
    "Serviços",
    "Portfólio",
    "Blog",
    "Contato",
    "Login",
    "Área do cliente"
  ];

  console.log("Antes do splice:", menuNavegacao);
console.table(menuNavegacao);

// Removendo 2 elementos a partir do índice 2
let elementosRemovidos = menuNavegacao.splice(2, 2);

console.log("Depois do splice:", menuNavegacao);
console.table(menuNavegacao);

console.log("Elementos removidos:", elementosRemovidos);