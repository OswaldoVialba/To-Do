let deleteElements=[];
let listToDo = document.querySelector(".list-container");
let deleteBtn = document.querySelector(".delete-btn");
listToDo.addEventListener("click",(event)=>{
    if(event.target.tagName == "INPUT"){
        let id = event.target.id
        console.log(id);
        if(deleteElements.includes(id)){
            let index = deleteElements.findIndex((element)=>{return element == id;})
            deleteElements.splice(index,1);
        }else{
            deleteElements.push(id);
        }
    }
});

deleteBtn.addEventListener("click",()=>{
    for (let ind in deleteElements){
        let elementList = document.getElementById(`to-do-${deleteElements[ind]}`);
        let containerList = elementList.parentNode;
        containerList.removeChild(elementList);

        ind = parseInt(ind);
        pendientes.splice(ind,1);
    }
    printPendientesHTML();
    updateData();
    deleteElements=[];

});
