let pendientes = [];
let inputTodo = document.getElementById("to-do");
let containerList = document.querySelector(".list-container");
inputTodo.addEventListener("keypress",(event)=>{
    if(event.code == "Enter"){
        AddToDo(event.target.value);
        inputTodo.value = "";
        inputTodo.blur();
    }
})

function AddToDo(toDo){
    let start = pendientes.length;
    pendientes.push(toDo);
    for(let id =  start; id < start + 1; id++){
        let listToDo = createElementLisToDo(id,pendientes[id]);
        containerList.appendChild(listToDo);
    }
}

function createElementLisToDo(id, text){
    let li = document.createElement("li");
    let inCheck = document.createElement("input");
    let span = document.createElement("span");
    li.id= id;
    li.classList.add("to-do-item");
    inCheck.type="checkbox";
    inCheck.id = id;
    span.id = id;
    span.classList.add("to-do-text");
    span.textContent = text;
    li.appendChild(inCheck);
    li.appendChild(span);

    return li;

}

