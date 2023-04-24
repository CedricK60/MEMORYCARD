///////////SELECTEUR
const cartes = document.querySelectorAll('.carte'); //on recupere les cartes
let carteRetournee = false;
let premiereCarte, secondeCarte;
let verouillage = false; // quand 2 carte sont les même elle reste verouiller face image

cartes.forEach(carte => { //pour chaque carte
  carte.addEventListener('click', retourneCarte) // on ajoute un ecouteur d'evenement sur chaque carte
})

function retourneCarte() { // fonction pour retourner les cartes
  if (verouillage) return; //si le verouillage est activé, on ne fait rien
  this.childNodes[1].classList.toggle('active'); //on toggle la classe active sur la carte

  if (!carteRetournee) { //on met la carte retournee
    carteRetournee = true; //on met la carte retournée
    premiereCarte = this; // on met la carte en variable
    return;
  }

  carteRetournee = false; //on met la carte en non retournee
  secondeCarte = this; //on met la carte en variable

  console.log(premiereCarte, secondeCarte);

correspondance (); //on appelle la fonction 
}

function correspondance() {
  if(premiereCarte.getAttribute('data-attr') === secondeCarte.getAttribute('data-attr')) { //si les carte corresponde
    premiereCarte.removeEventListener('click', retourneCarte); //on suprime l'ecouteur d'evenement sur la premiere carte
    secondeCarte.removeEventListener('click', retourneCarte); //on supprime l'evenement de la seconde carte
  } else {
    verouillage = true; //sinon on active le verouillage
    setTimeout(() => { //on met en place le time out
      premiereCarte.childNodes[1].classList.remove('active'); //on retire la classe active sur la premiere carte
      secondeCarte.childNodes[1].classList.remove('active'); //on retire la classe active sur la seconde carte

    verouillage = false;
    }, 1500) //on suprime le verouillage après 1.5 secondes
  }
}

function aleatoire(){ //fonction pour generer un nombre aleatoire

  cartes.forEach(card => { //pour chaque carte
    let randomPos = Math.floor(Math.random() * 12); //on genere un nombre aleatoire entre 0 et 12
    card.style.order = randomPos; //on met la carte dans la position aleatoire
  })
  
}

aleatoire();

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000
  });