let d = document;
let lettre = d.querySelectorAll('.rond');
let mots=words_list;
let listeLettre;
let ltr;
// let nbLettre;



function startGame(){
    let motATrouve=RandomMots()
    console.log(motATrouve);
    let nbLettre=motATrouve.length;

    d.querySelector('#MtAtrv').innerHTML="";
    for(i =0 ; i< nbLettre; i++){
        d.querySelector('#MtAtrv').innerHTML+='<span class="lettre">_</span>';
    }

    let image =1;


    lettre.forEach(function(listeLettre){
        listeLettre.classList.remove('transparance');
        listeLettre.addEventListener('click',btn);
        listeLettre.removeAttribute('disabled')  ;
    });
    function btn(event){
        event.target.classList.remove('.rond');
        event.target.classList.add('transparance');
        let ltr= event.target.value;
        
        event.target.removeEventListener('click',btn);
        event.target.setAttribute('disabled', true);
        let bonneReponse=false;
        
        for(i=0 ;i<motATrouve.length; i++){
                
            if(ltr==motATrouve[i]){
                d.querySelectorAll('.lettre')[i].innerText=ltr;
             bonneReponse=true;
            }
        }
             if(bonneReponse==false){
                image++
                console.log(image)
            }
            if(image == 8){
                lettre.forEach(function(boutonEnd){
                    boutonEnd.setAttribute('disabled',true)});
            }
        
    }



}


function RandomMots(){
    let random = Math.floor(Math.random() * mots.length);
    let mot = mots[random];
    mot = mot.replace("â","a").replace("à","a").replace("ï","i").replace("î","i").replace("ô","o").replace("ö","o").replace("é","e").replace("è","e").replace("ê","e").replace("ç","c");
    mot = mot.toLowerCase();       
    return mot;
}

// function btn(event){
//     event.target.classList.remove('.rond')
//     event.target.classList.add('transparance')
//     let ltr= event.target.value;
//     d.querySelector('#MtAtrv').innerHTML=ltr;
//     event.target.removeEventListener('click',btn)
//     event.target.setAttribute('disabled', true)
 
// }

startGame()

let start=d.querySelector('#Start');
start.addEventListener('click',startGame);
let pb;