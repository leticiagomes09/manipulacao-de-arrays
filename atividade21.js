let estoque = [
    { produto: "Teclado", quantidade: 5 },
    { produto: "Mouse", quantidade: 12 },
    { produto: "Monitor", quantidade: 3 },
    { produto: "Notebook", quantidade: 18 },
    { produto: "Impressora", quantidade: 9 },
    { produto: "Webcam", quantidade: 20 }
  ];
  
  let estoqueFiltrado = estoque.filter(produtos => produtos.quantidade > 10);

  console.log(`Produtos com mais de 10 unidades: ${estoqueFiltrado}`);
  