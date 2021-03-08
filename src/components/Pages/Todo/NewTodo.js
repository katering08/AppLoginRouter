import { MdAdd } from 'react-icons/md';
import FormInput from '../../Forms/FormInput';

function NewTodo({onChange, value, onAddNew}){
  return (
    <div className="TodoAddNew">
      <div className="flex justify-between w-screem mx-3 px-4">
          <FormInput
            type="text"
            id="txtNTodo"
            name="txtNTodo"
            onChange={onChange}
            value={value}
            className="Todo-Input"
            onKeyUp={(e) => { if (e.keyCode == 13) { onAddNew(e);} }}
          />
          <MdAdd className="text-white  bg-blue-800  hover:bg-white hover:text-blue-800 hover:border-blue-800 rounded-md" size={"2.8rem"} onClick={onAddNew}></MdAdd>
      </div>
    </div>
  );
}

export default NewTodo;