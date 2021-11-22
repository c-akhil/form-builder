import React, { Suspense } from "react";
import "react-datepicker/dist/react-datepicker.css";
const ReactDatePicker = React.lazy(() => import("react-datepicker"));

export default function InputDate({ value, setValue, className, placeholder }) {

    return (
      <Suspense fallback={<React.Fragment/>}>
        <ReactDatePicker
          dateFormat="dd/MM/yyyy"
          className={className}
          onChange={setValue}
          selected={value}
        />
      </Suspense>
    );
  }
  