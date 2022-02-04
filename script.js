const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

const previousTodo = JSON.parse(localStorage.getItem('todos'));

if(previousTodo)
{
    previousTodo.forEach((todo)=>{
        AddToDo(todo);
    });
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    AddToDo();
});

function AddToDo(todo)
{
    let todoText = input.value;

    if(todo)
    {
        todoText = todo.text;
    }

    if(todoText)
    {
         const todoEle = document.createElement("li");
         if(todo && todo.completed)
            todoEle.classList.add("completed");
         todoEle.innerText = todoText;
         todos.appendChild(todoEle);

         todoEle.addEventListener('click',()=> {
             todoEle.classList.toggle("completed");
             UpdateLS();
         });
         todoEle.addEventListener('contextmenu',(e)=> {
             e.preventDefault();
            todoEle.remove();
            UpdateLS();
        });

         input.value = "";
         UpdateLS();
    }
}
function UpdateLS()
{
    const todosEle = document.querySelectorAll('li');
    const todos = [];
    todosEle.forEach((todoEl) => {
        todos.push({
            text : todoEl.innerText,
            completed : todoEl.classList.contains("completed"),
        });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}