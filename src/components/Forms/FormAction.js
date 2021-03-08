function FormAction({text, onClick}){
  return (
      <button type="button" onClick={onClick}
      class="w-full p-3 mb-3 text-white bg-pink-800 rounded-md hover:bg-yellow-700">
      {text}
      </button>
  );
}
export default FormAction;