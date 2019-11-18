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

let btn_edit = document.getElementsByClassName("btn-outline-secondary")[0];
	first_card = document.getElementsByClassName("card-text")[0];
	console.log(btn_edit.textContent);
	console.log(first_card.textContent);

    btn_edit.addEventListener("click", red);
    function red() {
    	first_card.style.color = "red";
    } ;

//************Fonctionalité 4 *****************//



