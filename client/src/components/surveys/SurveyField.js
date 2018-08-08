import React from 'react';

//Props is passed to here by redux Field

export default props => {
  //console.log(props)
  return (
    <div>
      <label>{props.label}</label>
      <input {...props.input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {props.meta.touched && props.meta.error}
      </div>
    </div>
  );
};
