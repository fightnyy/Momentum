const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = "toDos";    
let toDos=[];


function saveToDos()
{
    //JSON.stringify make object to String!
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}
//localstorage can only store String type!
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId=toDos.length+1;
    const span = document.createElement("span");
    delBtn.innerText = "❌";
    span.innerText = text;
    delBtn.addEventListener("click",deleteToDo);
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    const toDoObj={
        text: text,
        id: newId,
    }
    toDos.push(toDoObj);
    saveToDos();

}
function deleteToDo(event)
{
    const btn=event.target;
    const li=btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos=toDos.filter(function(toDo){
        return toDo.id!==parseInt(li.id);
    })
    //filter 하면 True에 있는 것만 저장
    toDos=cleanToDos;
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

//JSON=JavaScript Object Notation: 데이터를 전달할 때 자바스크립트가 이를 다룰 수 있도록 object로 바꿔주는 기능
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos=JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }

}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}


init();