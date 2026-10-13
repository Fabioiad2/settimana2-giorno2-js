/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto 'persona' con: nome, cognome, eta, citta.
   Stampa: 'Mario Rossi, 25 anni, vive a Roma.'
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const PERSONA = {
   nome:"Fabio",
   cognome:"Iadicicco",
   eta:"19",
   citta:"Caserta"
}
console.log(`${PERSONA.nome} ${PERSONA.cognome}, ${PERSONA.eta} anni vive a  ${PERSONA.citta}.`)

/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto 'persona': aggiungi 'email', poi rimuovi 'eta'.
   Stampa l'oggetto risultante.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
PERSONA.email = "fabio@example.com"
console.log("email di fabio", PERSONA.email);

delete PERSONA.eta
console.log(PERSONA)

/* ESERCIZIO 3 — Oggetto annidato
   Oggetto 'utente' con una proprietà 'indirizzo' (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const UTENTE = {
   indirizzo: {
      via:"VIa roma 56",
      citta:"Caserta",
      cap:"81100"
   }
}
console.log("cap",UTENTE.indirizzo.cap)

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto 'persona', variabile chiave = 'nome'.
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa 'Pareggio'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 100;
let b = 100;
let c = 100

if(a > b && b > c){
   console.log(a, " A è il numero più grande");
   
}
else if(b > a && b > c ){
   console.log(b," B è più grande");
}
else if(c > a && c > b){
   console.log(c," è il più grande");
}
else if(a === b && b === c)
   {
   console.log("sono uguali");
}

/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile 'totale'.
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: 'Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€'
   Risolvi una volta con if/else e una volta con ternario.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totale = 40 ; // carrello
let spedizione = 9.90; //spedizione
let totaleFinale;
if(totale >= 50){
   console.log("spedizione gratuita");
   totaleFinale = totale
   console.log("Totale "+totaleFinale,"$","spedizione gratuita");
}
else{
   totaleFinale = totale + spedizione
   console.log(`totale carrello ${totale} - spedizione ${spedizione} - totale finale ${totaleFinale}`);
   
}

const MessaggioSconto = totale >= 50 ? console.log("Totale",totale,"spedizione gratuita") : console.log(`Totale Carrello ${totale} spedizione ${spedizione} totale finale${totaleFinale = totale + spedizione}`)
 



/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, 'ciao', true]).
   Con un for + if, per ogni elemento stampa 'x è un numero' o 'x non è un numero'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const LISTA = ["uno",8, false]
for (const l of LISTA ) {
   if( typeof l === "number"){
      console.log(l,"è un numero")
   }
}
   for(const l of LISTA){
      if (typeof l != "number") {
         console.log(l,"non è un numeri");
      }
      
}



/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/
const LISTA2 = []
// inserisce 1.5 all'ultimo indice
LISTA2.push(1.5)
console.log(LISTA2,"lista 2","Lunghezza array", LISTA2.length);

// aggiunge 0 al primo indice
LISTA2.unshift(0)
console.log(LISTA2,"lista 2","Lunghezza array", LISTA2.length);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9 — Carrello con splice
   Array ['Penna', 'Quaderno', 'Zaino', 'Astuccio'].
   Con splice: rimuovi 'Quaderno', poi inserisci 'Diario' al suo posto.
   Stampa dopo ogni operazione.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const OGGETTI = ['Penna', 'Quaderno', 'Zaino', 'Astuccio']
OGGETTI.splice(1,1,"diario")
console.log(OGGETTI);


/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ['Penna', 'Quaderno', 'Zaino'].
   cercato = 'Zaino'.
   Con includes: stampa 'Zaino è in carrello: true'.
   Con indexOf: stampa la posizione, o 'Non in carrello'.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log();
if(OGGETTI.includes('Zaino')){
console.log("si trova in posizione",OGGETTI.indexOf('Zaino'))

}
else{
   console.log("non è presente");
}



/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: 'Mario (25 anni)'.
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const User = [
   {name:"Mario",eta:25}
   {name:"Luigi",eta:25}
   {name:"Fabio",eta:19}
]


for (let index = 0; index < User.length; index++) {
   console.log(index);
   
}



/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → 'OFFERTA: nome (prezzo€)'
   - disponibile && prezzo >= 10 → 'nome — prezzo€'
   - !disponibile → 'nome — esaurito'
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array 'inverso', riempilo con un for (dall'ultimo al primo) usando push.
   Stampa 'inverso'.
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
