import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/css/validatedTextInput.css';

const ValidatedTextInput = ({
  desktop,
  placeholder,
  type,
  value,
  update,
  error,
  check,
  inputID,
}) => (
  <div className={`ValidatedTextInput ${desktop ? 'ValidatedTextInput--desktop' : ''}`}>
    <label htmlFor={inputID} className="ValidatedTextInput__label">
      <span
        className={`ValidatedTextInput__labeltext ValidatedTextInput__labeltext--${
          value ? 'active' : 'inactive'
        }`}
      >
        {placeholder}
      </span>
      <input
        id={inputID}
        className="ValidatedTextInput__input"
        inputMode={type}
        type={type === 'password' ? type : 'text'}
        autoComplete={type === 'email' ? 'email' : 'on'}
        placeholder={placeholder}
        value={value}
        size={150}
        onChange={(e) => {
          e.preventDefault();
          update(e.target.value);
        }}
        onBlur={(e) => {
          e.preventDefault();
          check(e.target.value);
        }}
      />
    </label>
    <span className="ValidatedTextInput__errorMsg"> {error} </span>
  </div>
);

ValidatedTextInput.propTypes = {
  desktop: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['email', 'password', 'text']).isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  inputID: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  check: PropTypes.func.isRequired,
};
ValidatedTextInput.defaultProps = {
  placeholder: '',
  error: '',
  desktop: false,
};

export default ValidatedTextInput;
