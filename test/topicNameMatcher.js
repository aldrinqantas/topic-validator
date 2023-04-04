const { expect } = require("chai");
const { topicNameMatcher } = require("../utils/topicNameMatcher");

describe("topicNameMatcher", function () {
  it("topic and name IS MATCH from masterData", function () {
    const myObject = {
      topic: "A",
      name: "a",
      description: "something",
    };

    const errors = topicNameMatcher(myObject);
    expect(errors).to.be.deep.equal(true);
  });

  it("topic and name NOT MATCH from masterData", function () {
    const myObject = {
      topic: "A",
      name: "x",
      description: "something",
    };

    const errors = topicNameMatcher(myObject);
    expect(errors).to.be.deep.equal(false);
  });
});
