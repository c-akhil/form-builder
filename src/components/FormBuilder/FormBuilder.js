import React, { useEffect, useState } from "react";
import { INPUT_TYPES } from "../../constants/inputTypes";
import InputText from "../FormElements/InputText";
// const InputText = React.lazy(() => import("../FormElements/InputText"));



export default function FormBuilder({ form, onSubmit }) {
  const [formData, setFormData] = useState({});

  function getInputUIByType(element, setFormData) {

    const setNewInputValue = (newElementValue) => {
      const newFormData = { ...formData };
      newFormData[element.key] = newElementValue;
      setFormData(newFormData);
    }

    if (element.type === INPUT_TYPES.TEXT) {
      return (
        <React.Fragment>
          {element.label && <label className={element.labelClassName || "form-label"}>{element.label}</label>}
          <InputText
            className={element.className}
            placeholder={element.placeholder}
            value={formData[element.key]}
            setValue={setNewInputValue} />
        </React.Fragment>
      )
    }

    return <React.Fragment />;
  }

  // updating form data from other components
  useEffect(() => {
    const newFormData = {};
    form && form.forEach((element) => {
      newFormData[element.key] = element.value;
    });
    setFormData(newFormData)
  }, [form])

  return (
    form.map((element, elementIndex) => (
      <React.Fragment key={element.id && element.id != 0 ? element.id : elementIndex}>
        {getInputUIByType(element, setFormData)}
      </React.Fragment>
    ))
  );
}

