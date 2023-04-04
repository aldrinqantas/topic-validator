// Define all topics you want to only validate. You can add more like: C,D,E,F
const topicsMasterData = [
  {
    topic: "A",
    name: "a",
  },
  {
    topic: "B",
    name: "x",
  },
];

// loop through the array and compare each object's name and age properties to the object we want to match.
function topicNameMatcher(myObject) {
  return !!topicsMasterData.find(
    (obj) => obj.topic === myObject.topic && obj.name === myObject.name
  );
}

module.exports = {
  topicNameMatcher,
};
