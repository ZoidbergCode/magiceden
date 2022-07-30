const pagButton = document.getElementById('pag-button');
const pagMenu = document.getElementById('pag-menu');
const pagArrow = document.getElementById('pag-arrow');

const openPagMenu = () => {
	if (pagMenu.style.cssText == "display: none;") {
		pagMenu.style = "display: block;";
		pagArrow.style = "transition: all .2s ease; transform: rotate(180deg);";
	}
	else {
		pagMenu.style = "display: none;";
		pagArrow.style = "transition: all .2s ease; transform: rotate(0deg);";
	}
}

pagButton.addEventListener("click", openPagMenu)