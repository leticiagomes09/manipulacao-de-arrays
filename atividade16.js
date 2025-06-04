let gradeCurricular = [
    "Matemática",
    "Português",
    "Biologia",
    "Física",
    "História",
    "Educação Física",
    "Inglês"
  ];
  
  console.log("Antes do splice:");
console.table(gradeCurricular);

// Removendo e substituindo 2 elementos a partir do índice 3
gradeCurricular.splice(2, 3, "programação" , "Robótica")

console.log("Depois do splice:");
console.table(gradeCurricular);

