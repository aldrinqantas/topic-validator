const { schemaValidator } = require('../utils/schemaValidator');
const { topicNameMatcher } = require('../utils/topicNameMatcher');

function topicValidator(myObject, schema) {
  let errors = {};

  // check for topic and name if they are match
  const isMatch = topicNameMatcher(myObject);

  if (isMatch) {
    // validate other fields like description
    errors = schemaValidator(myObject, schema);
  } else {
    errors.topic = 'Topic cannot found or topic name is not match from topicMasterData';
  }

  return errors;
}

module.exports = {
    topicValidator,
}