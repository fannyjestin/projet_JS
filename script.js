//************Fonctionnalité 1 *****************//

let footerCounter = 0;
let footer = document.getElementsByTagName('footer')[0];

footer.addEventListener("click", addone);

	function addone() {
	  footerCounter +=1;
	  console.log(`clic numéro ${footerCounter}`); 
	};


//************Fonctionnalité 2 *****************//

let menuBtn = document.getElementById("navbarHeader");

menuBtn.addEventListener("click", navbartoggle);

	function navbartoggle() {
  	menuBtn.classList.toggle('collapse');
	};
// TOGGLE : fonction qui permet de rajouter une classe si elle n'est pas déjà présente et l'enlever si elle est déjà présente. C'est "toggle". Tu peux l'utiliser ainsi : elementDuDOM.classList.toggle("nomDeLaClasse")


//************Fonctionnalité 3 *****************//

let btnEdit = document.getElementsByClassName("btn-outline-secondary")[0];
	firstCard = document.getElementsByClassName("card-text")[0];
	console.log(btnEdit.textContent);
	console.log(firstCard.textContent);

    btnEdit.addEventListener("click", Red);
    function Red() {
    	firstCard.style.color = "red";
    } ;

//************Fonctionnalité 4 *****************//


let btnEdit2 = document.getElementsByClassName("btn-outline-secondary")[1];
let	secondCard = document.getElementsByClassName("card-text")[1];

	console.log(btnEdit2.textContent);
	console.log(secondCard.textContent);

    btnEdit2.addEventListener("click", Green);

    function Green() {
		if (secondCard.style.color === 'green') { 
			secondCard.style.color = '' ; 
		} else {
			secondCard.style.color = 'green';
		}
	};


//************Fonctionnalité 5 *****************//


let navbar = document.getElementsByClassName("navbar")[0];
let bootstrap = document.getElementsByTagName('link')[0];

console.log(bootstrap);

	navbar.addEventListener("dblclick", destroyCDN);

	function destroyCDN() {
		if  (bootstrap.rel == "stylesheet") { 
			bootstrap.rel = "styleDisabled";
		} else {
			bootstrap.rel = "stylesheet";
		}
		};

//************Fonctionnalité 6 *****************//


let viewLength = document.getElementsByClassName("btn-success").length

console.log(viewLength)

for (let i = 0; i < viewLength; i++) {

	let btnView = document.getElementsByClassName("btn-success");

	btnView[i].addEventListener("mouseover", Fonction1);

	function Fonction1() {
		document.getElementsByClassName("card-text")[i].classList.toggle("d-none"); //d-none on enleve le texte
		document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25"); //d-none on enleve le texte
	};
};


//************Fonctionnalité 7 *****************//

let btnGrey = document.getElementsByClassName("btn-secondary")[0];

let old = document.getElementsByClassName("row")[1];
let young = document.getElementsByClassName("col-md-4");

	btnGrey.addEventListener("click", Fonction2);

	function Fonction2() {
		old.prepend(young[5])
	};

//********** Fonctionnalité 8 *****************//


let btnBlue = document.getElementsByClassName("btn-primary")[0];

	btnBlue.addEventListener("click", Fonction3);

	function Fonction3() {
		old.appendChild(young[0]);
	};




