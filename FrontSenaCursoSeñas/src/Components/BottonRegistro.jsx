import React from 'react'
import {Button} from "@nextui-org/react";

export const BottonRegistro = ({text,colort}) => {
  return (
    <div className='pt-6 pb-6'>
    <Button className='w-[200px] text-white' color='success'>
    {text}
    </Button>
    </div>
  );
}
