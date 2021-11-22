import './App.css';
import FormBuilder from './components/FormBuilder/FormBuilder';
import { INPUT_TYPES } from './constants/inputTypes';

function App() {
  return (
    <div className="container m-3">
      <FormBuilder
        onSubmit={(data) => {
          console.log(data, "submit data")
        }}
        form={[
          {
            type: INPUT_TYPES.TEXT,
            className: "form-control",
            key: 'name',
            label: 'Name',
            placeholder: "Jhon"
          }
        ]} />
    </div>
  );
}

export default App;
