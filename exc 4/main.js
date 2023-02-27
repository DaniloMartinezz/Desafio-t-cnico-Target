const faturamento = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
  };
  
  // Calculo de fatoramento total:
  const faturamentoTotal = Object.values(faturamento).reduce((acc, cur) => acc + cur);
  
  // Calculo do percentual de representação
  const percentuais = {};
  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / faturamentoTotal) * 100;
    percentuais[estado] = percentual.toFixed(2);
  }
  
  // Para imprimir os resultados 
  console.log('Faturamento total: R$' + faturamentoTotal.toFixed(2));
  console.log('Percentuais de representação por estado:');
  for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
  }