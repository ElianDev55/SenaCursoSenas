import React from "react";
import { InputFormulario } from "./InputFormulario";

export const FormChangePassword = ({}) => {
    return (
        <div>
            <div className="pt-2">
                <p>Contraseña Actual</p>
                <InputFormulario 
                tipo="password"
                />
            </div>
            <div className="pt-2">
                <p>Contraseña Nueva</p>
                <InputFormulario
                tipo="password"
                />
            </div>
            <div className="pt-2">
                <p>Confirmar Contraseña</p>
                <InputFormulario
                tipo="password"
                />
            </div>
        </div>
    );
}
