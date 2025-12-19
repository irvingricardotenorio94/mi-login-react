/* eslint-disable */
import { useState } from "react";
import './LoginForm.css';

function LoginForm(){
  
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const manejarEnvio = (e) =>{
        e.preventDefault();
    };

    return (
        <div className="logincard">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={manejarEnvio}>
                <input 
                   type="email" 
                   name="" 
                   placeholder="Correo" 
                   onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                   type="password" // El tipo password oculta los caracteres con puntos
                   placeholder="Contraseña" 
                   value={password}
                   onChange={(e) => setPassword(e.target.value)} 
                   required
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )


}

export default LoginForm;