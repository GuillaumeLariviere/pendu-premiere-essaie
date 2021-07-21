let d = document;
let lettre = d.querySelectorAll('.rond');
let mots=["bonjour","salut"];
let motATrouve=RandomMots()
let nbLettre=motATrouve.length


function startGame(){
    start=d.querySelector('#Start');
    start.addEventListener('clic',startGame());
    lettre.forEach(function(listeLettre){
        listeLettre.classList.remove('.d-none');
        listeLettre.addEventListener('clic',btn);
            function btn(){
                listeLettre.classList.add('.d-none')

    }
},)





   
   
   
    













}
startGame()

function RandomMots(){
    let random = Math.floor(Math.random() * mots.length);
    let mot = mots[random];
    mot = mot.replace("â","a").replace("à","a").replace("ï","i").replace("î","i").replace("ô","o").replace("ö","o").replace("é","e").replace("è","e").replace("ê","e").replace("ç","c");
    mot = mot.toLowerCase();       
    return mot;
}

let pb;