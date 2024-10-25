//let x = null;

//console.log(typeof x);

let idade = 16;
//let concluiuEnsinoMedio = true
let concluiuEnsinoMedio = true;
if(idade >= 18 || concluiuEnsinoMedio){
    let result = null;

    result = 'estudante apto a ensino superior\n';
    result += 'estudante pode se matricular no IFPB';

    //console.log(result);
    //console.log('estudante apto a ensino superior')
    //console.log('estudante pode se matricular no IFPB');
}
else{
    //console.log('estudante não pode se matricular no IFPB')
}

//switch - case

let animal = 'mamifero';

switch(animal){

    case 'mamifero':
        console.log('produz leite');
        break;

    case 'reptil':
        console.log('temperatura corporal definida pelo ambiente');
        break;
    case 'ave':
        console.log('voa');
        break;
    default:
        console.log('tipo indefinido');

}