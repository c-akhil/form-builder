import React, { Suspense, useRef } from "react";
const ReactSelect = React.lazy(() => import("react-select"));

export default function InputSelect({ componentId ,value, setValue, className, placeholder, options, isMulti=false }) {

    const uniqueComponentId = useRef(componentId || `input-select-${parseInt(Math.random()*10000)}`)

    return (
      <Suspense fallback={<React.Fragment/>}>
        <ReactSelect
          className={className}
          placeholder={placeholder}
          isSearchable
          instanceId={uniqueComponentId.current}
          value={value}
          onChange={setValue}
          options={options}
          isMulti={isMulti}
        />
      </Suspense>
    );
  }
  