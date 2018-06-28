import validate from 'validate.js';
import rules from './rules';

export default function validation(fieldName, value) {
  const formValues = {
    [fieldName]: value,
  };

  const formFields = {
    [fieldName]: rules[fieldName],
  };

  const result = validate(formValues, formFields);

  if (result) {
    return result[fieldName][0];
  }

  return null;
}
