console.log('JS OK')

/*  
TRACCIA:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

/* 
1. Chiedo all'utente quanti chilometri vuole percorrere 
2. Chiedo all'utente la sua età
3. Moltiplico i chilometri dichiarati con il prezzo del biglietto 
4. Se minorenni applico uno sconto del 20 percento
5. Se over 65 applico uno sconto differente, del 40 percento
6. Do il prezzo finale
*/


// 1 Chiedo qual è il nome

const numberKm = prompt('Quanti chilometri vuole percorrere?')
console.log ('Quanti chilometri vuole pecorrere?', numberKm)

// 2 Chiedo qual è il cognome 

const userAge = prompt('Qual è la tua età?')
console.log ('Qual è la tua età?', userAge)