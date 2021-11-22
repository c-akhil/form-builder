import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function InputDate({ value, setValue, className, placeholder }) {
    return (
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        className={className}
        onChange={setValue}
        selected={value}
      />
    );
  }
  