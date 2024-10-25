function verificatri(a,b,c){

if (a>= b + c || b >= a + c || c >= a + b) return 'none';
else
    switch (true) {
        case a === b && b === c:
            return 'Equilatero';
        case a !== b && b !== c && a !== c:
            return 'Escaleno';
        default:
            return 'isosceles';


    }
}
console.log(verificatri(3,3,5))

