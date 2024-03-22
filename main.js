// Teorema di Bohm-Jacopini: tutti gli algoritmi seguono tre caratteristiche: sequenza, condizioni, iterazioni.
// I flowchart ci permettono di eseguire un algoritmo attraverso passaggi precisi.
// Esempi di flowchart.
// 1 alert
// alert('Ciao');
// alert('Sono js');
// alert('Vivo nel browser');

// 2 alert e prompt.
// alert('Qual è il tuo nome?');
// prompt();
// alert('Piacere di conoscerti');

// 3 variabile: una variabile è un' informazione da salvare per poter essere riutilizzata, associandola ad una sorta di cassetto dove mettere tale informazione. Per inizializzare una variabile usiamo let nomevariabile. Per attribuirgli un valore usiamo let nomevariabile=valore.
// alert('Qual è il tuo nome?');
// let name1= prompt();
// alert(`Piacere di conoscerti`);
// alert(name1);

// 4
// alert('Qual è il tuo nome?');
// let name2= prompt();
// alert(`Piacere di conoscerti ${name2}`);
// Le back tick (alt 96(tastierino)) permettono l' interpolazione della variabile con il dollaro(nome variabile).
// Oppure possiamo usare la concatenazione.
// alert('Qual è il tuo nome?');
// let name3=prompt();
// alert('Piacere di conoscerti '+name3);
// Oppure possiamo usare la variabile d' appoggio
// alert('Qual è il tuo nome?');
// let name4=prompt();
// let variabile_d_appoggio='Piacere di conoscerti '+ name4;
// alert(variabile_d_appoggio);

// 5 Utilizziamo direttamente il prompt per conoscere il nome utente.
// let name5=prompt('Qual è il tuo nome?');
// let a='Piacere di conoscerti '+name5;
// alert(a);
// let b=prompt('Come vuoi che ti saluti?');
// alert('Ciao '+b);
// Utilizziamo una variabile e la sovrascriviamo
// let name6=prompt('Qual è il tuo nome');
// let a1='Piacere di conoscerti '+name6;
// let b1=prompt('Come vuoi che ti saluti?');
// a1=a1+' '+b1;
// Abbiamo sovrascritto una variabile già inizializzata e assegnata di valore, in questo caso la variabile a1
// alert(a1);

// 6 If else while
// let age=prompt('Quanti anni hai?');
// while (isNaN(age)){
//     alert('Inserisci un numero');
//     age=prompt('Quanti anni hai?');
// };
// if(age>=18){
//     alert('Puoi bere');
// }else{
//     alert('Non puoi bere');
// };

// 7 if else do/while
// let patente;
// do{
//     patente=prompt('Hai la patente?\n1 Sì\n2 No');
// } while(patente=='2'){
// while(patente!=1 && patente!=2){
//     alert('Inserisci sì o no');
//     do{
//         patente=prompt('Hai la patente?\n1 Sì\n2 No');
//     } while(patente=='2'){};
// }
// if(patente==1){
//     alert('Puoi guidare');
// }
// }

// 8 if else if
// let a2=prompt('Seleziona una bevanda:\n1 Acqua 1\n2 Acqua 2\n3 Acqua 3');
//  while(a2!=1 && a2!=2 && a2!=3){
//     alert('Seleziona una bevanda')
//     a2=prompt('Scegli una bevanda:\n1 Acqua 1\n2 Acqua 2\n3 Acqua 3');
// }
// if(a2==1){
//     alert('Hai selezionato Acqua 1');
// } else if (a2==2){
//     alert('Hai selezionato Acqua 2');
// } else{
//     alert('Hai selezionato Acqua 3');
// }

// 9
// let a3=prompt('Seleziona una bevanda:\n1 Acqua 1\n2 Acqua 2\n3 Acqua 3');
// while(a3!=1 && a3!=2 && a3!=3){
//     alert('Seleziona una bevanda');
//     a3=prompt('Seleziona una bevanda:\n1 Acqua 1\n2 Acqua 2\n3 Acqua 3');
// }
// if(a3==3){
//     let age=prompt('Quanti anni hai?');
//     while(isNaN(age)){
//         alert('Inserisci un numero');
//     }
//     if(age>=18){
//         alert('Puoi bere Acqua 3');
//     } else{
//         alert('Non puoi bere Acqua 3')
//     }
// } else if(a3==1){
//     alert('Hai selezionato Acqua 1');
// } else{
//     alert('Hai selezionato Acqua 2')
// }

// Javascript è un linguaggio di programmazione multiparadigma orientato agli eventi. I linguaggi possono essere compilati o interpretati. 
// I linguaggi compilati come C, C++ sono utilizzati lato software, la macchina legge tutto il codice ma non lo esegue, prima deve compilarlo tramite un compilatore che lo traduce in linguaggio macchina. Il compilatore svolge come una funziona di revisore, se è tutto giusto crea dei file eseguibili in una singola esecuzione.
// I linguaggi interpretati come Phyton, Php, si avvalgono di un interprete che legge ogni riga di codice, quest' ultimo lo traduce alla macchina e lo esegue subito. Se ci sono ripetizioni le ripete, se ci sono errori si ferma al primo errore individuato.
// Javascript è un linguaggio Just in time: legge la riga, compila ed esegue il codice identificando le porzioni di codice frequentemente utilizzate, se trova errori le righe di codice vengono comunque lette.

// Le variabili

// Il nome delle variabili non deve cominciare con un numero, non si possono utilizzare gli spazi(si utilizza il camelCase o lo snake_), non si possono utilizzare i caratteri speciali (tranne $ e _), sono case-sensitive.
// Il console.log ci permette di vedere in console il valore della variabile.
// Le variabili possono essere let, var, const.
// Le variabili let non possono essere sovrascritte, ma possono essere riassegnate(let a=0; let a=1;(sovrascrizione) è un errore, mentre let a=0; a=1;(riassegnazione) è possibile).
// Le variabili var possono essere sovrascritte e riassegnete.
// Le variabili const sono costanti e non possono essere riassegnate.
// Le variabili let e var possono essere riassegnate di valori diversi, una stringa, un number, un Null, un undefined, questo perchè Js è un linguaggio a tipizzazione debole.

// TIPI DI DATO

// Dati non primitivi:object
// Dati primitivi:number,string,boolean,Null,undefined,symbol
// Type coercion: implicita ed esplicita, cambia il tipo di dato Tostring(),ToNumber(), Nan è una type coercion non riuscita, undefined rappresenta assenza di valore, Null esprime la mancanza di un identificativo

// TIPI DI OPERATORI

// Unari,binari,terbari
// UNARI:
// Let a=1;
// a++(operatore unario) a=2 (aumenta di 1 il valore di a).
// Let b=2;
// b--  b=1
// BINARI:
// confronto(==,<,>,<=,>=,!=),logici(&& ||),matematici.
// && ci restituisce il primo valore Falsy che trova, se non ne trova restituisce l' ultimo valore Truthy.
// || ci restituisce il primo valore Truthy che trova, se non ne trove restituisce l' ultimo valore Falsy.

// CONDIZIONI E CICLI

// Una condizione è presente all' interno dell' algoritmo, ci permette di eseguire un blocco di istruzioni o un altro,a seguito di un controllo logico.
// IF{} ELSE{}
// IF{} ELSE IF{} ELSE{}
// SWITCH
// Switch serve per controllare se il dato che viene passato corrisponde esattamente ad un valore all' interno di una condizione

// let x=0;
// switch(x){
//     case 0: console.log('0');break;
//     case 1: console.log('1');break;
//     default: console.log('default');break;
// }

// Un ciclo è un blocco di istruzione che si ripete n volte finche la condizione che gli appartiene non diventa falsa
// FOR
// WHILE
// DO/WHILE

// for(let i=0;i<10;i++){
//     console.log(i);
// }

// Esempio di lancio dei dadi

// let tiri=5;
// let punteggio=0;

// for(i=0;i<tiri;i++){
// let random=Math.floor(Math.random()*(7-1)+1);
// punteggio=punteggio+random;
// console.log(random);
// }
// console.log(punteggio);

// While 
// ripete il blocco di istruzioni fino a quando la condizione è verificata.

// let i=0;
// while(i<5){
// i++
// }
// console.log(i);

// Funzioni e array

// Una funzione è un blocco di codice che possiamo riutilizzare.
// Si dividono in Built-in e User-function

// function nomefunzione(parametri formali){
    // blocco di istruzione
// }
// invocazione console.log(nomefunzione(parametri reali))
// Funzione somma due numeri
// function sommaduenumeri(n1, n2){
//     let somma=n1+n2;
//     return somma;
// }
// let funzione1=sommaduenumeri(268,444);
// console.log(funzione1);

// Gli array sono una lista ordinata di elementi, con un indice che parte da zero, è un tipo di dato object, non primitivi, pesanti e mutabili.
// metodi degli array:
// push(): aggiunge alla fine un elemento.
// pop(): toglie alla fine un elemento.
// unshift(): aggiunge all' inizio un elemento.
// shift(): toglia all' inizio un elemento.
// reverse():capovolge l' ordine.
// sort():ordina gli elementi.
// splice():rimuove uno o più elementi in base all' indice.
// SPREAD OPERATOR:Lo spread(...) rompe gli array e libera gli elementi, lo splat(...) crea gli array.
// Call-back()=>
// reduce((acc,n)=>acc+n):somma tutti gli elementi.
//  map((el)=>el):crea un array con gli elementi dell' array originario, crea un clone.Per esempio 
//  let array1=[1,2,3,4];
//  let array2=array1.map((el)=>el)
// filter((el)=>el):come la map mi permette di creare un nuovo array partendo da un array originario, permette di filtrare elementi attraverso una condizione.
// foreach((el)=>el):permette di fare un ciclo for abbreviato, per ogni elemento dell' array esegue un' azione, detta side effect. Non si può salvare in una variabile, in quanto facendo solo un side effect per ogni elemento non ha un valore, quindi restituirà undefined.

// Gli oggetti

// Sono la rappresentazione astratta di un qualcosa di reale.
// Lista non ordinata di coppie chiave:valore.
// Le chiavi possono essere solo string o symbol, i valori possono essere qualsiasi tipo di dato.
// Le chiavi con un valore associato prendono il nome di proprietà.
// Quando invece il suo valore è una funzione prende il nome di metodo.

// let oggetto_telefono={
// 'marca':'marca x',
// 'modello':'modello x',
// 'prezzo': NaN,
// 'contatti':['x','y','z'],
// 'chiama': function (){
//     console.log('sto chiamando');
// },
// 'showcontacts':function(){
//     console.log(this.contatti);
// }

// }

// oggetto_telefono.showcontacts();
// oggetto_telefono.chiama();

// oggetto_telefono.prezzo=null;
// console.log(oggetto_telefono);

// Esempio di un object

// let object={
//     objecta:'objectb',
//     object1:null,
//     object2:function(){
//         this.objecta=NaN;
//     },
//     players:[
//         {name:'name1',score:[1,2,3,4,5]},
//         {name:'name2',score:[6,7,8,9,10]},
//         {name:'name3',score:[11,12,13,14,15]}
//     ],
//     finalscore:function(){
//         this.players.forEach((player)=>{
//             player.finalscore=player.score.reduce((acc,n)=>acc+n);
//         })
//     }
// }
// object.object2();
// object.finalscore();
// console.log(object);

// MANIPOLAZIONE DEL DOM

// DOM:Document Object Model
// console.dir():ci permette di vedere proprietà e metodi all' interno di un oggetto, come ad esempio console.dir(document).
// Per manipolare il DOM utilizziamo una scaletta.
// 1-Catturare uno o più elementi su cui vogliamo agire
// 2-Modificare lo stile, il contenuto, le classi...
// 3-Creare nuovi elementi.
// 4-Manipolare il DOM al verificarsi di un evento

// 1- Catturare un elemento:
// document.querySelector();Cattura un elemento che diventa un oggetto
// let h1=document.querySelector('h1');
// let p1=document.querySelectorAll('p');
// let h_class=document.querySelectorAll('.h3-1');
// let h3_id=document.querySelector('#id1');
// (selettore per tag)
// let h1=document.querySelector('.title');
// (selettore per classi)
// let h1=document.queryselector('#id');
// (selettore per id)
// Per selezionare più tag uguali:document.queryselectorAll();Cattura più elementi in una node.list

// 2-Modificare lo stile...
// Per esempio modificare le proprietà di un singolo elemento.
// Una volta catturato h1 è diventato un oggetto:
// h1={
//     style:{
//         color:'',
//         backgroundColor:''
//     }
// }
// h1.style.color='orange';
// h1.style.backgroundColor='#f92bdd'
// h1.style.border='orange'
// h1.style.fontSize='69px'
// console.dir(h1);
// (L' unico valore accettato per modificare o inserire una proprietà è una stringa)
// console.dir(p1);
// Gli elementi catturati p sono diventati una Node-list, che è un Array-like.Non si possono utilizzare i metodi degli Array, tranne uno che è il forEach().
// Per modificare una proprietà di una Node list
// p è come se fosse p=[par1, par2, par3, par4]
// p1.forEach((paragraph)=> {
//     paragraph.style.backgroundColor='rgb(28,105,218)';
//     paragraph.style.fontWeight='bold';
// });
// h_class.forEach((h)=>{
//     h.style.backgroundColor='rgb(28,105,218)';
// });
// h3_id.style.backgroundColor='blueviolet';
// Innertext: è il testo incluso all' interno del tag.
// InnerHTML: rappresenta l' esatto contenuto di un tag, compresi altri tag se sono contenuti nel tag in esame.
// Possiamo modificare il render del browser cambiando l' innerHTML, per esempio
// h1.innerHTML='Titolo';
// Esempio con un div vuoto con class wrapper nella pagina HTML.
// let wrapper=document.querySelector('.wrapper');
// wrapper.innerHTML=`
// <p class="p-1">Lorem picsum dolor sit amet</p>
// <img src= "https://picsum.photos/100" alt="immagine">
// `
// 3- Creare elementi
// document.createElement(): ci permette di creare in JS un tag vuoto, il tag va specificato nelle tonde sotto forma di stringa
// let paragrafo=document.createElement('p');
// paragrafo.innerHTML='paragrafo';
// console.log(paragrafo);
// IL paragrafo è creato, ma ancora non si vede, dobbiamo appenderlo al wrapper che lo deve contenere. Viene inserito come ultimo elemento, nelle tonde dell' appendChild() viene inserito l' elemento senza l' utilizzo di virgolette.
// wrapper.appendChild(paragrafo);
// Per creare una lista studenti
// let elenco=document.querySelector('.elenco');
// let lista=['studente1','studente2','studente3','studente100'];
// lista.forEach((studente)=>{
//     let li=document.createElement('li');
//     li.innerHTML=studente;
//     elenco.appendChild(li);
// })
// Creare delle card dinamicamente
// let lista2=[
//     {name:'x', description:'xx', price:'xxx'},
//     {name:'y', description:'yy', price:'yyy'},
//     {name:'z', description:'zz', price:'zzz'},
// ]
// let wrapper1=document.querySelector('#wrapper1');
// lista2.forEach((el)=>{
//     let div=document.createElement('div')
//     div.classList.toggle('cardCustom')
//     div.innerHTML=`
//     <p class="inherit">name:${el.name}</p>
//     <p class="inherit">description:${el.description}</p>
//     <p class="inherit">price:${el.price}</p>`
//     wrapper1.appendChild(div)
// })
// Per aggiungere il css e assegnare una classe usiamo le classlist
// CLASSLIST
// 1 .add():aggiunge una classe.
// 2 .remove():toglie una classe.
// 3 .toggle():aggiunge una classe se non c'è, la toglie se c'è.

// 4- Gli eventi

// Gli eventi
// Gli eventi sono delle operazioni interattive che possono essere usate dall' utente sul sito.
// addEventListener().
// let h3=document.querySelector('#h3-2');
// let change_color=document.querySelector('#change-color');
// change_color.addEventListener('click',()=>{
//     h3.classList.toggle('red');
// });
