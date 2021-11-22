import { useState } from 'react';
import ReactJson from 'react-json-view';
import './App.css';
import FormBuilder from './components/FormBuilder/FormBuilder';
import { INPUT_TYPES } from './constants/inputTypes';

function App() {

  const [formData, setFormData] = useState([
    {
      key: 'name',
      label: 'Name',
      placeholder: "Jhon",
      type: INPUT_TYPES.TEXT,
      className: "form-control",
    },
    {
      key: 'email',
      label: 'Email',
      placeholder: "test@example.com",
      type: INPUT_TYPES.TEXT,
      className: "form-control",
    },
    {
      key: 'dob',
      label: 'Date of Birth',
      placeholder: "15-08-1947",
      type: INPUT_TYPES.DATE_PICKER,
      className: "form-control",
    },
    {
      label: 'Submit',
      type: INPUT_TYPES.BUTTON,
      className: "m-3 mx-auto d-flex btn btn-primary",
      onClick: (data)=>{
        console.log(data, "submit data")
      }
    }
  ]);


  return (
    <div className="container m-3">
      <div className="row">
        <div className="col-6">
          <ReactJson
            name={false}
            displayObjectSize={false}
            displayDataTypes={false}
            enableClipboard={false}
            src={formData}
          />
        </div>
        <div className="col-6">
          <FormBuilder
            onChange={(data) => {
              setFormData(data);
            }}
            form={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;
