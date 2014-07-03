var index=0;

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

		document.getElementById("listName").value = "";
}

function createAddTODOtextBox(dom) {
	var textArea,
	addButton,
	cancelButton,
	newTodoDiv,
	tempTodoDiv,
	editImage,
	cancelTodoImage,
	toolDiv;

	tempTodoDiv = document.createElement("div");

	textArea = document.createElement("textarea");
	
	addButton = document.createElement("div");
	addButton.classList.add("btn");
	addButton.classList.add("btn-primary");
	addButton.innerHTML = "Add";

	addButton.addEventListener('click', function () {
		newTodoDiv = document.createElement("div");
		newTodoDiv.classList.add("savedTodoItem");
		newTodoDiv.innerHTML = "<span class='todoValue'>" + textArea.value + "</span>";
		tempTodoDiv.remove();

		toolDiv = document.createElement("div");
		toolDiv.classList.add("editTools");

		editImage = document.createElement("div");
		editImage.classList.add("editImage");

		cancelTodoImage = document.createElement("div");
		cancelTodoImage.classList.add("cancelTodoImage");

		toolDiv.appendChild(editImage);
		toolDiv.appendChild(cancelTodoImage);

		newTodoDiv.appendChild(toolDiv);

		dom.appendChild(newTodoDiv);

		createAddTODOtextBox(dom);
	});

	cancelButton = document.createElement("div");
	cancelButton.classList.add("btn");
	cancelButton.innerHTML = "Cancel";

	cancelButton.addEventListener('click', function (event) {
		tempTodoDiv.remove();
	});


	tempTodoDiv.appendChild(textArea);
	tempTodoDiv.appendChild(document.createElement("br"));
	tempTodoDiv.appendChild(addButton);
	tempTodoDiv.appendChild(cancelButton);

	dom.appendChild(tempTodoDiv);
}


function createNewListDom(name) {
	var container = document.getElementById("todoListContainer"),
	div = document.createElement("div"),
	addListEntry = document.createElement("div"),
	deleteListEntry = document.createElement("div");

	div.classList.add("todoListDiv");
	div.innerHTML = "<strong>"+name+"</strong><br>";

	addListEntry.classList.add("addTodoLabel");
	addListEntry.innerHTML = "Add a TODO";
	addListEntry.addEventListener('click', function (event) {
		createAddTODOtextBox(event.target.parentElement);
	});

	deleteListEntry.classList.add("addTodoLabel");
	deleteListEntry.innerHTML = "Delete the List";
	deleteListEntry.addEventListener('click', function (event) {
		event.target.parentElement.remove();
	});	
	
	div.appendChild(addListEntry);
	div.appendChild(deleteListEntry);

	container.appendChild(div);

}

function createNewList(event, name) {
	var dom;
	openNewListBox(event,false);
	console.log(name);
	dom = createNewListDom(name);
}
