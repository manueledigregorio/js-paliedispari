//1. inizializzare una variabile con il promt 'inserire una parola'
let inserisciParola = prompt('inserisci una parola')

const myarray = inserisciParola.split("");
let messaggio = controllo(myarray);
document.getElementById('output').innerHTML = messaggio ;
function controllo(myarray){

  let  myarrayinverso = [];

  let messaggio = ' la parola è palindroma';

  for(let i = myarray.length -1 ;i >= 0; i--){
 
    myarrayinverso.push(myarray[i]);
  }
   //e,l,e,l

  //l,e,l,e
  for (let i = 0 ; i<= myarray.length -1; i++){

    if(myarray[i] !== myarrayinverso[i]){

       messaggio= 'la parola NON è palindroma'


    }
      
  }

  return messaggio;

}



//1. creare una funzione  che paragona la lettura  per rendere dinamico 
//1. creare un ciclo per verificare se la parola e palindroma 
