let htmlList = document.getElementById("todo-list");
let insertInput = document.getElementById("insert-item");
let addButton = document.getElementById("add-button");
let data = localStorage.getItem("toDoList");

if (data) {
    toDoList = JSON.parse(data);
} else {
    toDoList = [];
}

let render = function() {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    let convertList = toDoList.map(function(item, index) {
        return "<li> <div><input type='checkbox'></div> <input type='text' class='todo-item' disabled value='" + item + "'> <ion-icon name='pencil-outline' class='buttons edit-buttons' data-id='" + index + "'></ion-icon> <ion-icon name='trash-outline' class='buttons del-buttons' data-id='" + index + "'></ion-icon> </li>"
    })
    let content = convertList.join("");
    htmlList.innerHTML = content;
    getEditButtons();
    getDelButtons();
    finishItem();
}

let addItem = function() {
    if (insertInput.value) {
        toDoList.push(insertInput.value);
        render();
        insertInput.value = "";
    }
}

addButton.addEventListener("click", addItem);
insertInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        addItem();
    }
})

let delItem = function() {
    let i = this.dataset.id;
    toDoList.splice(i, 1);
    let liTag = document.querySelectorAll("li");
    liTag[i].classList.add("fall");
    liTag[i].addEventListener("transitionend", function() {
        this.remove();
        render();
    })
}

let getDelButtons = function() {
    let delButton = document.querySelectorAll(".del-buttons");
    delButton.forEach(function(element) {
        element.addEventListener("click", delItem);
    });
}

let editItem = function() {
    let toDoItem = document.querySelectorAll(".todo-item");
    let j = this.dataset.id;
    toDoItem[j].removeAttribute("disabled");
    toDoItem[j].focus();
    toDoItem[j].addEventListener("focusout", function() {
        toDoList.splice(j, 1, toDoItem[j].value);
        toDoItem[j].classList.add("disabled");
        render();
    })
}

let getEditButtons = function() {
    let editButton = document.querySelectorAll(".edit-buttons");
    editButton.forEach(function(element) {
        element.addEventListener("click", editItem);
    })
}

let finishItem = function() {
    let liTag = document.querySelectorAll("li");
    let finishButton = document.querySelectorAll("input[type='checkbox']");
    finishButton.forEach(function(btn, index) {
        btn.addEventListener("click", function() {
            liTag[index].classList.toggle("finish-item");
        })
    })
}

render();