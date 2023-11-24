import React from "react";
import { InputFormulario } from "./InputFormulario";

export const FormUpdate = ({}) => {
    return (
        <div>
            <div className="pt-2">
                <p>Nombres</p>
                <InputFormulario />
            </div>
            <div className="pt-2">
                <p>Apellidos</p>
                <InputFormulario />
            </div>
            <div className="pt-2">
                <p>Tipo De Identificacion</p>
                <select id="selectField" name="selectField" className="w-full p-2 rounded border border-gray-300 bg-gray-200">
                    <option value="">Seleccionar...</option>
                    <option value="opcion1">Cedula De Ciudadania</option>
                    <option value="opcion2">Tarjeta De Identidad</option>
                    <option value="opcion3">Cedula Extranjera</option>
                </select>
            </div>
            <div className="pt-2">
                <p>Correo Electronico</p>
                <InputFormulario />
            </div>
            <div className="pt-2">
                <p>¿Tiene Alguna Discapacidad?</p>
                <select id="selectField2" name="selectField2" className="w-full p-2 rounded border border-gray-300 bg-gray-200">
                    <option value="">Seleccionar...</option>
                    <option value="opcion5">Si</option>
                    <option value="opcion6">No</option>
                </select>
            </div>
        </div>
    );
}
