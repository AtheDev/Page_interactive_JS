// Fonctionnalité 1 :

let footerClick = document.querySelector('footer');
footerClick.addEventListener('click',fonctionClickFooter);

function fonctionClickFooter(){
  console.log("clique");
}

// Fonctionnalité 1-bis :

let countClickFooter = 1;
footerClick.addEventListener('click',fonctionClickFooter);

function fonctionClickFooter(){
  console.log("clic numéro " + `${countClickFooter}`);
  countClickFooter++;
}

// Fonctionnalité 2 :

let hamburger = document.getElementById('navbarHeader');
let button = document.getElementsByClassName('navbar-toggler')[0];
button.addEventListener('click', fonctionRemoveHamburger);

function fonctionRemoveHamburger(){
   hamburger.classList.toggle("collapse");
}

// Fonctionnalité 3 :

let boutonEdit1 = document.querySelectorAll("div.btn-group > button")[1];
let textCard1 = document.querySelectorAll("p.card-text")[0];
boutonEdit1.addEventListener('click', fonctionTextRed);

function fonctionTextRed(){
   textCard1.style.color = 'red';
}

// Fonctionnalité 4 :

let boutonEdit2 = document.querySelectorAll("div.btn-group > button")[3];
let textCard2 = document.querySelectorAll("p.card-text")[1];
boutonEdit2.addEventListener('click', fonctionTextGreen);

function fonctionTextGreen(){
  if (textCard2.style.color === 'green') {
    textCard2.style.color = '';
  } else{
   textCard2.style.color = 'green';
  }
}

// Fonctionnalité 5 :

let navbar = document.getElementsByClassName('navbar')[0];
let headBootstrap = document.querySelector('head > link');
let bodyNoBootstrap = document;
navbar.addEventListener('dblclick', fonctionRemoveBootstrap, true);
bodyNoBootstrap.addEventListener('dblclick', fonctionAddBootstrap, true);

function fonctionRemoveBootstrap(e){
  headBootstrap.href = "";
  e.preventDefault();
}

function fonctionAddBootstrap(){
  headBootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
}

// Fonctionnalité 6 :

let boutonView = document.querySelectorAll("div.btn-group > button.btn-success");
let allCards = document.getElementsByClassName("col-md-4");
let textCards = document.querySelectorAll("p.card-text");
let images = document.getElementsByTagName('img');
let text = textCards.textContent;

for (let i = 0; i < allCards.length; i++){

  boutonView[i].addEventListener('mouseover', fonctionCardReduce);

  function fonctionCardReduce(){
    if (textCards[i].style.display !== ''){
       textCards[i].style.display = '';
        images[i].style.width = '100%';
   } else {
    textCards[i].style.display = 'none';
    images[i].style.width = '20%' ;
   }
  }
}

// Fonctionnalité 7 :

let buttonGray = document.querySelectorAll("a.btn")[1];

buttonGray.addEventListener('click', fonctionChangePlace);

function fonctionChangePlace(){
  let parentCard = document.getElementsByClassName("row")[1];
  let firstCard = document.getElementsByClassName("col-md-4")[0]
  let cardMove = document.getElementsByClassName("col-md-4")[5];
  parentCard.insertBefore(cardMove, firstCard)
}

// Fonctionnalité 8 :

let buttonBlue = document.querySelectorAll("a.btn")[0];

buttonBlue.removeAttribute('href');
buttonBlue.addEventListener('click', fonctionChangePlaceBis);

function fonctionChangePlaceBis(){
  let parentCard = document.getElementsByClassName("row")[1];
  let cardMoveFirst = document.getElementsByClassName("col-md-4")[0];
  let lastCard = document.getElementsByClassName("col-md-4")[5];
  parentCard.insertBefore(cardMoveFirst, lastCard.nextSibling)
}

// Fonctionnalité 9 :

let titleJS = document.getElementsByClassName("navbar-brand")[0];
let bodyMain= document.getElementsByClassName("container")[3];
let cards = document.querySelectorAll("div.col-md-4");



titleJS.addEventListener('keypress', fonctionPress, false);


function fonctionPress(){

  if (event.keyCode == '97'){
    bodyMain.style.marginLeft = 'inherit';
    bodyMain.style.marginRight = 'auto';

    for (let i = 0; i < 6; i++){
      cards[i].classList.add("col-md-3");
      cards[i].classList.remove("col-md-4");
    }
  }

  else if (event.keyCode == '121') {
    bodyMain.style.marginLeft = 'auto';
    bodyMain.style.marginRight = 'auto';

    for (let i = 0; i < 6; i++){
      cards[i].classList.add("col-md-3");
      cards[i].classList.remove("col-md-4");
    }
  }

  else if (event.keyCode == '112') {
    bodyMain.style.marginLeft = 'auto';
    bodyMain.style.marginRight = 'inherit';

    for (let i = 0; i < 6; i++){
      cards[i].classList.add("col-md-3");
      cards[i].classList.remove("col-md-4");
    }
  }

  else if (event.keyCode == '98') {
    bodyMain.style.marginLeft = 'auto';
    bodyMain.style.marginRight = 'auto';

    for (let i = 0; i < 6; i++){
      cards[i].classList.add("col-md-4");
      cards[i].classList.remove("col-md-3");
    }
  }

}









