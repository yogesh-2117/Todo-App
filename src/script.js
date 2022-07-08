// selectors
const todoInput = document.querySelector(".todo-input")
const todoBtn = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
// listeners
todoBtn.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck)
//functions
function addTodo(event){

    event.preventDefault();

    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")

    const todoTask = document.createElement("li")
    todoTask.innerText = todoInput.value
    todoTask.classList.add("todo-task")
    todoDiv.appendChild(todoTask)
    todoInput.value = ''

    const todoCheck = document.createElement("button")
    todoCheck.innerHTML = '<i class="fa-solid fa-square-check"></i>'
    todoCheck.classList.add("check-btn")
    todoDiv.appendChild(todoCheck)

    const todoTrash = document.createElement("button")
    todoTrash.innerHTML = '<i class="fa-solid fa-trash"></i>'
    todoTrash.classList.add("trash-btn")
    todoDiv.appendChild(todoTrash)
    todoList.appendChild(todoDiv)

}


function deleteCheck(e){
    const item = e.target
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement
        todo.classList.add("fall")
        setTimeout(()=>{
            todo.remove()
        },800)
        // todo.addEventListener('transitioned',function(){
        //     todo.remove();
        // })
    }
    if (item.classList[0] === "check-btn"){
        const todo = item.parentElement
        todo.classList.toggle("completed")
        // setTimeout(()=>{
        //     todo.remove()
        // },1000)
    }
}