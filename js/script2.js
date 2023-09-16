const pariDispari = prompt('inserisci pari o dipspari!');
const numero = prompt('inserisci numero da 1 a 5');
const randomPC = generatoreRandom();
const somma = numero + randomPC;


const risultato = verifica(somma);
let messaggio;

if(pariDispari === risultato ){

  messaggio = ' hai vinto';

}else {


  messaggio = 'hai perso';
}

document.getElementById('output').innerHTML = messaggio






// funzione prende la somma e verifica se è pari o dispari
function verifica(somma){

  let messaggio ;
  if(somma % 2 === 0 ){

  messaggio = 'pari'

  }else{

    messaggio = 'dispari';
  }

 return messaggio;
}
// funzione per generare numero random PC 
function generatoreRandom(){

  const numeroRandom = Math.ceil(Math.random() * 5 );
   return numeroRandom;



}

