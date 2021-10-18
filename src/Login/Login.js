import React from "react";
import "./Login.css"
import imagem from "./user2.png"
export default function Login() {
    return (
        <div>
            <div className="conteudo">
                <img src={imagem}></img>
                <div>
                    <form action="" name="formulario">
                        <h1>Member login</h1>
                        <input type="email" name="email" placeholder="E-mail"></input>
                        <input type="password" name="senha" placeholder="Password"></input>
                        <button className="botao">Login</button>
                        <a href="#">
                            <p className="p1">Forgot your password and/or email?</p>
                        </a>
                        <a href="#">
                            <p>Create your account</p>
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
}