const { expect } = require("chai");
const { topicValidator } = require("../validator/topicValidator");

describe("topicValidator", function () {
  it("Error Scenario: validator to return error for topic A with name a and description is more than 10 chars and less 100 chars", function () {
    const myObject = {
      topic: "A",
      name: "x",
      description: "something",
    };

    const schema = {
      topic: { type: "string" },
      name: { type: "string" },
      description: { type: "string", min: 11, max: 100 },
    };

    const errors = topicValidator(myObject, schema);
    expect(errors).to.be.deep.equal({
      topic:
        "Topic cannot found or topic name is not match from topicMasterData",
    });
  });

  it("Error Scenario: validator to return error for topic A with name a and description is less than 40 chars", function () {
    const myObject = {
      topic: "B",
      name: "x",
      description: "The quick brown fox",
    };

    const schema = {
      topic: { type: "string" },
      name: { type: "string" },
      description: { type: "string", max: 40 },
    };

    const errors = topicValidator(myObject, schema);
    console.log(errors);
    expect(errors).to.be.deep.equal({});
  });

  it("Success Scenario: validator to return no error for working scenario for Topic A", function () {
    const myObject = {
      topic: "A",
      name: "a",
      description: "The quick brown fox jump over the lazy dog",
    };

    const schema = {
      topic: { type: "string" },
      name: { type: "string" },
      description: { type: "string", min: 11, max: 100 },
    };

    const errors = topicValidator(myObject, schema);
    expect(errors).to.be.deep.equal({});
  });

  it("Success Scenario: validator to return no error for working scenario for Topic B", function () {
    const myObject = {
      topic: "B",
      name: "x",
      description: "The quick brown fox",
    };

    const schema = {
      topic: { type: "string" },
      name: { type: "string" },
      description: { type: "string", max: 40 },
    };

    const errors = topicValidator(myObject, schema);
    expect(errors).to.be.deep.equal({});
  });
});
