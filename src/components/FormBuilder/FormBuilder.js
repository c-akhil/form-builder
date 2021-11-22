import React, { useEffect, useState } from "react";
import { INPUT_TYPES } from "../../constants/inputTypes";
import InputButton from "../FormElements/InputButton";
import InputDate from "../FormElements/InputDate";
import InputSelect from "../FormElements/InputSelect";
import InputText from "../FormElements/InputText";
// const InputText = React.lazy(() => import("../FormElements/InputText"));



export default function FormBuilder({ form, onSubmit, onChange }) {
  const [formData, setFormData] = useState({});

  const onChangeFormData = (data) => {
    if (onChange && typeof onChange === "function") {
      const newFormData = [];
      form && form.forEach((element) => {
        newFormData.push({
          ...element,
          value: data[element.key]
        })
      });
      onChange(newFormData);
    } else {
      setFormData(data);
    }
  }

  function getInputUIByType(element, setUpdatedFormData) {

    const setNewInputValue = (newElementValue) => {
      const newFormData = { ...formData };
      newFormData[element.key] = newElementValue;
      setUpdatedFormData(newFormData);
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

    if (element.type === INPUT_TYPES.DATE_PICKER) {
      return (
        <React.Fragment>
          {element.label && <label className={element.labelClassName || "form-label"}>{element.label}</label>}
          <InputDate
            className={element.className}
            placeholder={element.placeholder}
            value={formData[element.key]}
            setValue={setNewInputValue}
          >
          </InputDate>
        </React.Fragment>
      )
    }

    if (element.type === INPUT_TYPES.MULTIPLE_CHOICES) {
      return (
        <React.Fragment>
          {element.label && <label className={element.labelClassName || "form-label"}>{element.label}</label>}
          <InputSelect
            className={element.className}
            setValue={setNewInputValue}
            value={formData[element.key]}
            options={element.options}
            isMulti
          />
        </React.Fragment>
      )
    }

    if (element.type === INPUT_TYPES.SELECT) {
      return (
        <React.Fragment>
          {element.label && <label className={element.labelClassName || "form-label"}>{element.label}</label>}
          <InputSelect
            className={element.className}
            setValue={setNewInputValue}
            value={formData[element.key]}
            options={element.options}
          />
        </React.Fragment>
      )
    }

    if (element.type === INPUT_TYPES.BUTTON) {
      return (
        <React.Fragment>
          <InputButton
            className={element.className}
            onClick={element.onClick}
            value={formData}
          >
            {element.label && <label className={element.labelClassName || "form-label"}>{element.label}</label>}
          </InputButton>
        </React.Fragment>
      )
    }

    return <React.Fragment />;
  }

  // updating form data from other components
  useEffect(() => {
    const newFormData = {};
    form && form.forEach((element) => {
      if (element.key)
        newFormData[element.key] = element.value;
    });
    setFormData(newFormData)
  }, [form])

  return (
    form && Array.isArray(form) ? form.map((element, elementIndex) => (
      <React.Fragment key={element.id && element.id !== 0 ? element.id : elementIndex}>
        {getInputUIByType(element, onChangeFormData)}
      </React.Fragment>
    )) : <React.Fragment />
  );
}

