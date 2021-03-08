import {  RiCloseCircleLine} from 'react-icons/ri';
import { MdDone } from 'react-icons/md';

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({descripcion, id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(id);
  }

  const myClass = (completed)?"striked": "";
  return (
    <li className="content">
      <div class="description">
        <span className={myClass}>{descripcion}</span>
    </div>
    <div className="icons">
      <MdDone className="edit" onClick={onClick}></MdDone>
      <RiCloseCircleLine className="delete" onClick={onDeleteClick}></RiCloseCircleLine>
    </div>
  </li>);
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
        key={o.doneHandlerid}
        descripcion={o.description}
        id={o.id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className="TodoList">
      <ul>
         {todoItems}
      </ul>
    </section>
  );
}

export default TodoList;