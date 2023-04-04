const { expect } = require("chai");
const { schemaValidator } = require("../utils/schemaValidator");

describe("schemaValidator", function () {
  it("Schema to return for description with less than 10 chars", function () {
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

    const errors = schemaValidator(myObject, schema);
    expect(errors).to.be.deep.equal({
      description: "description should be more than 10 characters",
    });
  });
  it("Schema no error", function () {
    const myObject = {
      topic: "A",
      name: "x",
      description: "The quick brown fox jump over the lazy dog",
    };

    const schema = {
      topic: { type: "string" },
      name: { type: "string" },
      description: { type: "string", min: 11, max: 100 },
    };

    const errors = schemaValidator(myObject, schema);
    expect(errors).to.be.deep.equal({});
  });
});
