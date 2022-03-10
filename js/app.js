let pendientes = [];
let inputTodo = document.getElementById("to-do");
let containerList = document.querySelector(".list-container");

window.addEventListener('DOMContentLoaded',()=>{
    getData()
    printPendientesHTML()
});

function updateData(){
    localStorage.removeItem("listToDo");
    localStorage.setItem("listToDo",JSON.stringify(pendientes));
}

function getData(){
    data = localStorage.getItem("listToDo")
    if(data == null){
        localStorage.setItem("listToDo",JSON.stringify(pendientes));
    } else{
        pendientes = JSON.parse(data);
        console.log(data)
    }
}

function printPendientesHTML(){
    containerList.innerHTML="";
    let fragment = document.createDocumentFragment();
    for(let id in pendientes){
        let listToDo = createElementLisToDo(id,pendientes[id]);
        fragment.appendChild(listToDo);
    }
    containerList.appendChild(fragment);
}

inputTodo.addEventListener("keypress",(event)=>{
    if(event.code == "Enter"){
        if(event.target.value != ""){
            AddToDo(event.target.value);
            inputTodo.value = "";
            inputTodo.blur();
        }
    }
})

function AddToDo(toDo){
    let start = pendientes.length;
    pendientes.push(toDo);
    for(let id =  start; id < start + 1; id++){
        let listToDo = createElementLisToDo(id,pendientes[id]);
        containerList.appendChild(listToDo);
    }
    updateData();
}

function createElementLisToDo(id, text){
    let li = document.createElement("li");
    let inCheck = document.createElement("input");
    let span = document.createElement("span");
    li.classList.add("to-do-item");
    li.id=(`to-do-${id}`);
    inCheck.type="checkbox";
    inCheck.id = id;
    span.classList.add("to-do-text");
    span.textContent = text;
    li.appendChild(inCheck);
    li.appendChild(span);

    return li;

}

