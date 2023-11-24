import React from "react";

import {Input} from "@nextui-org/react";

export const InputFormulario = ({text,tipo,lab})=>{
  return (
    <div className="w-full">
      <p>{text}</p>
      <Input type={tipo} label={lab} />
    </div>
  );
}
