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
    }
  ]);


  return (
    <div className="container m-3">
      <div className="row">
        <div className="col-6">
          <FormBuilder
            onSubmit={(data) => {
              console.log(data, "submit data")
            }}
            onChange={(data) => {
              setFormData(data);
            }}
            form={formData} />
        </div>
        <div className="col-6">
          <ReactJson
            name={false}
            displayObjectSize={false}
            displayDataTypes={false}
            enableClipboard={false}
            src={formData}
            theme="monokai"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
