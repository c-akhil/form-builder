import { useState } from 'react';
import ReactJson from 'react-json-view';
import './App.css';
import FormBuilder from './components/FormBuilder/FormBuilder';
import { EMAIL_REGEXP } from './components/FormValidations/FormValidations';
import { INPUT_TYPES } from './constants/inputTypes';

function App() {

  const [showErrors, setShowErrors] = useState(false);

  const [formData, setFormData] = useState([
    {
      key: 'name',
      label: 'Name',
      placeholder: "Jhon",
      type: INPUT_TYPES.TEXT,
      className: "form-control",
      required: true,
    },
    {
      key: 'gender',
      label: 'Gender',
      placeholder: "Male / Female",
      required: true,
      type: INPUT_TYPES.SELECT,
      options:[
        { value: 'MALE', label: 'Male'},
        { value: 'FEMALE', label: 'Female'},
        { value: 'OTHERS', label: 'Others'},
      ],
      labelClassName: "my-1",
    },
    {
      key: 'email',
      label: 'Email',
      placeholder: "test@example.com",
      type: INPUT_TYPES.TEXT,
      className: "form-control",
      pattern: EMAIL_REGEXP
    },
    {
      key: 'dob',
      label: 'Date of Birth',
      placeholder: "15-08-1947",
      type: INPUT_TYPES.DATE_PICKER,
      className: "form-control",
      required: true,
    },
    {
      key: 'interests',
      label: 'Interests',
      placeholder: "Select interested topics",
      type: INPUT_TYPES.MULTIPLE_CHOICES,
      options:[
        { value: 'Tea', label: 'Tea'},
        { value: 'coffee', label: 'Coffee'},
        { value: 'Green Tea', label: 'Green Tea'},
      ],
      labelClassName: "my-1",
    },
    {
      label: 'Submit',
      type: INPUT_TYPES.BUTTON,
      className: "m-3 mx-auto d-flex btn btn-primary",
      onClick: (data)=>{
        console.log(data, "submit data")
        setShowErrors(true);
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
            showErrors={showErrors}
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
