function generation(x, y) {
  // coloca as opções como objeto e seus valores em array
	const generation = {
		"-3": ['great grandfather', 'great grandmother'],
		"-2": ['grandfather', 'grandmother'],
		"-1": ['father', 'mother'],
		"0": ['me!', 'me!'],
		"1": ['son', 'daughter'],
		"2": ['grandson', 'granddaughter'],
		"3": ['great grandson', 'great granddaughter'],
	}

	// realiza a verificação dos parametros
  return y === "m" ? generation[x][0] : generation[x][1];
  
  // se for generation(-2, 'm'), será verificado a propriedade "-2" 
	// com seus respectivos valores. Como os valores estão em array, 
	// basta verificar o indice, masculino[0] e feminino[1]
}
