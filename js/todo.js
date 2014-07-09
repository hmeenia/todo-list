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


function createDom(type, classArray, inner) {
	var dom = document.createElement(type);
	if(classArray) {
		classArray.forEach(function(elem) {
			dom.classList.add(elem);
		});
	}

	if(inner) {
		dom.innerHTML = inner;
	}

	return dom;
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
	
	addButton = createDom("div",["btn","btn-primary"],"Add");

	addButton.addEventListener('click', function () {
		newTodoDiv = createDom("div", ["savedTodoItem"]);
		newTodoDiv.appendChild(createDom("span", ["todoValue"], textArea.value));
		
		tempTodoDiv.remove();

		toolDiv = createDom("div", ["editTools"]);

		editImage = createDom("div", ["editImage"]);

		cancelTodoImage = createDom("div", ["cancelTodoImage"]);

		toolDiv.appendChild(editImage);
		toolDiv.appendChild(cancelTodoImage);

		newTodoDiv.appendChild(toolDiv);

		dom.appendChild(newTodoDiv);

		createAddTODOtextBox(dom);
	});

	cancelButton = createDom("div", ["btn"], "Cancel");

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
	div = createDom("div", ["todoListDiv"], "<strong>"+name+"</strong><br>"),
	addListEntry = createDom("div",["addTodoLabel"],"Add a TODO"),
	deleteListEntry = createDom("div", ["addTodoLabel"], "Delete the List");

	addListEntry.addEventListener('click', function (event) {
		createAddTODOtextBox(event.target.parentElement);
	});

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
