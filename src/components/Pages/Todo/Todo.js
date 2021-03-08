import {useState} from 'react';

import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import "./TodoList.css";

function Todo(){
  const [todoData, setTodoData] = useState({
    todos:[],
    newTodo:"",
  });
  const onChange = (e)=>{
    const {name, value} = e.currentTarget;
    setTodoData({...todoData, newTodo: value});
  };
  const onAddNew = (e)=>{
    let newToo = {
      description: todoData.newTodo,
      completed:false,
      id : new Date().getTime()
    };
    let newTodos = todoData.todos;
    newTodos.push(newToo);

    setTodoData({todos:newTodos, newTodo: ""});
  }
  const doneHandler = (id)=>{
    const newTodos = todoData.todos.map((o)=>{
      if(o.id == id){
        o.completed = !o.completed;
      }
      return o;
    });

    setTodoData({...todoData, todos:newTodos});
  };
  const deleteHandler = (id)=>{
    const newTodos = todoData.todos.filter((o) => {
      return o.id !==id;
    });

    setTodoData({ ...todoData, todos: newTodos });
  }
  const tmpTodos = todoData.todos.map( (o)=>{return JSON.stringify(o)} ).join(" | ");

  return (
    <section>
      <div className="mt-5">
        <div class="text-center text-white font-serif mb-12">
            <h1 class="pt-7 text-2xl font-bold">Lista de Serias Favoritas</h1>
        </div>
        <NewTodo
          onChange={onChange}
          value={todoData.newTodo}
          onAddNew={onAddNew}
        >
        </NewTodo>
          <TodoList 
            todos={todoData.todos}
            doneHandler={doneHandler}
            deleteHandler={deleteHandler}
          ></TodoList>
        </div>
    </section>
  )
}
export default Todo;