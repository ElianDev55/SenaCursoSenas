import React from "react";
import {Card, CardBody } from "@nextui-org/react";

export const AditionalInfo = (data) => {

    return (
      <Card  className="max-w-full lg:mt-10 lg:ml-20 md:mt-10 md:ml-20 max-sm:mt-10 max-sm:ml-5 max-sm:mr-5">
        <CardBody>
          <h1>INFORMACION ADCIONAL</h1>
          <br />
          <p>{data.data.inforpersonal}</p>
        </CardBody>
      </Card>
    );
}