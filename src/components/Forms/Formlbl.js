function Formlbl({lblfor ,text}){
    return (
        <label for={lblfor} class="block mb-3 text-sm text-white font-bold">{text}</label>
    );
}
export default Formlbl;