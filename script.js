//************Fonctionalité 1 *****************//

let footerCounter = 0;
let footer = document.getElementsByTagName('footer')[0];

footer.addEventListener("click", addone);

	function addone() {
	  footerCounter +=1;
	  console.log(`clic numéro ${footerCounter}`); 
	};


//************Fonctionalité 2 *****************//

let menuBtn = document.getElementById("navbarHeader");

menuBtn.addEventListener("click", navbartoggle);

	function navbartoggle() {
  	menuBtn.classList.toggle('collapse');
	};
// TOGGLE : fonction qui permet de rajouter une classe si elle n'est pas déjà présente et l'enlever si elle est déjà présente. C'est "toggle". Tu peux l'utiliser ainsi : elementDuDOM.classList.toggle("nomDeLaClasse")


//************Fonctionalité 3 *****************//

let btnEdit = document.getElementsByClassName("btn-outline-secondary")[0];
	firstCard = document.getElementsByClassName("card-text")[0];
	console.log(btnEdit.textContent);
	console.log(firstCard.textContent);

    btnEdit.addEventListener("click", Red);
    function Red() {
    	firstCard.style.color = "red";
    } ;

//************Fonctionalité 4 *****************//


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
