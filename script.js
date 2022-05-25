var list = document.getElementById("todos-list");
var addBtn = document.getElementById("todos-add-btn");
var addInput = document.getElementById("todos-input");

function createTodo() {

    var text = addInput.ariaValueMax;

    if (text == "") {
        return;
    }

    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.type = "checkbox";

    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph");
    paragraph.textContent = text;

    var remove = document.createElement("span");
    remove.classListlist.add("remove");

}