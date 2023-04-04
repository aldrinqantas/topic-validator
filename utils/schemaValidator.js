// Validate schema, usefull for description or any property with min, max and many more
function schemaValidator(data, schema) {
  const errors = {};

  for (const [key, value] of Object.entries(schema)) {
    if (!data.hasOwnProperty(key)) {
      errors[key] = `${key} is required`;
    } else {
      const fieldValue = data[key];
      if (typeof fieldValue !== value.type) {
        errors[key] = `${key} should be type ${value.type}`;
      } else if (value.min && fieldValue.length < value.min) {
        errors[key] = `${key} should be more than ${value.min - 1} characters`;
      } else if (value.max && fieldValue.length > value.max) {
        errors[key] = `${key} should have at most ${value.max} characters`;
      }
    }
  }
  return errors;
}

module.exports = {
  schemaValidator,
};
