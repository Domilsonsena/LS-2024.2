const calculadora = (n1, n2, operador) => {

    const operacoes = ['+', '-', '/', '*'];
    
    if(operacoes.includes(operador)){

        switch (operador) {
            case '+':
                return n1 + n2
                break
        
            case '-':
                return n1 - n2
                break
            
            case '/':
                return n1 / n2
                break

            case '*':
                return n1 * n2
                break

           
        }
    }

}

console.log(calculadora(8, 5, '.'))