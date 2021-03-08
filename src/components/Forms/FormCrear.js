function FormCrear({text,url,link}){
    return (
        <p class="text-sm text-center text-white">{text}
            <a href={url} class="text-blue-400 focus:outline-none focus:underline focus:text-blue-200">
                {link}
            </a>.
        </p>
    );
}
export default FormCrear;