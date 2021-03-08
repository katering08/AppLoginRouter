import React, { useState } from 'react';
import Formlbl from "./Formlbl";
import FormInput from "./FormInput";
import FormAction from "./FormAction";
import Social from "../Login/Social";
import FormCrear from "./FormCrear";
import FormPass from "./FormPass";
import Titulo from "../Login/Titulo";
import './Form.css';

function LoginForm(){
    const [formData, setFormData] = useState({
        email : "",
        password : "",
        usernameError : "",
        passwordError: ""
      });
    
      const _self = this;
      const myOnChange = function(e){
        const { name, value } = e.currentTarget;
        
        setFormData({ ...formData, [name]: value });
      }
    return (
            <form action="" class="style">
                <Titulo titulo="Iniciar Sesión"></Titulo>
                <Formlbl lblfor="email" text="Correo electrónico:"></Formlbl>
                <FormInput type="email" name="email" id="email"
                           placeholder="correo@dominio.com" onChange={myOnChange}
                           value={formData.email}>
                </FormInput>
                <Formlbl lblfor="password" text="Contraseña:"></Formlbl>
                <FormInput type="password" name="password" id="password" 
                        placeholder="contraseña" onChange={myOnChange} 
                        value={formData.password}>
                </FormInput>
                <FormPass></FormPass>
                <FormAction text="Acceder"
                            onClick={
                                (e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                    const { email, password } = formData;
                                    alert(`Usuario: ${email} Psswd: ${password}`);
                                }
                            }
                        >             
                </FormAction>
                <FormCrear text="¿No tienes cuenta? " url="#" link=" Crear una"></FormCrear>
                <Social></Social>
            </form>
    );
}
export default LoginForm;