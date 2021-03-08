function FormInput({type,name, id ,placeholder, onChange, value, ...attr}){
  return (
    <section>
        <input type={type} name={name} id={id} placeholder={placeholder} onChange={onChange} value={value} {...attr}
        class="w-full px-3 py-2 mb-5 placeholder-gray-500 border border-gray-300 rounded-md"/>
    </section>
  )
}
export default FormInput;