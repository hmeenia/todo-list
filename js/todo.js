function openNewListBox(event,create) {
	var createListDom = document.getElementById("createList"),
		addListDom = document.getElementById("addListBtn");
		console.log("hola");
		if(create) {
			addListDom.classList.add("hide");
			createList.classList.remove("hide");
		} else {
			addListDom.classList.remove("hide");
			createList.classList.add("hide");
		}
}

function createNewList(event) {
	openNewListBox(event,false);
}
