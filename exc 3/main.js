const faturamentoMensal = {
    "ano": 2022,
    "mes": "janeiro",
    "faturamento": [22174.1664, 24537.6698, 26139.6134, 0, 0, 26742.6612, 0.0, 42889.2258, 46251.174, 11191.4722, 0.0, 0.0, 3847.4823, 373.7838, 2659.7563, 48924.2448, 18419.2614, 0.0, 0.0, 35240.1826, 43829.1667, 18235.6852, 4355.0662, 13327.1025, 0.0, 0.0, 25681.8318, 1718.1221, 13220.495, 8414.61]
  };


  function calcularFaturamentoMensal(faturamentoMensal) {
    const faturamento = faturamentoMensal.faturamento;

    const menorFaturamento = Math.min(...faturamento.filter(valor => valor !== 0));
    
    const maiorFaturamento = Math.max(...faturamento.filter(valor => valor !== 0));
    
    const mediaMensal = faturamento.reduce((soma, valor) => {
      if (valor !== 0) {
        return soma + valor;
      } else {
        return soma;
      }
    }, 0) / faturamento.filter(valor => valor !== 0).length;
    
   
    const diasAcimaDaMedia = faturamento.filter(valor => valor > mediaMensal).length;
    
    return {
      "menorFaturamento": menorFaturamento,
      "maiorFaturamento": maiorFaturamento,
      "diasAcimaDaMedia": diasAcimaDaMedia
    };
  }
  
  const resultado = calcularFaturamentoMensal(faturamentoMensal);
  console.log(resultado);
