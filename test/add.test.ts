import add from "@libs/add";

describe("add two number", () => {
  test("positive integer", () => {
    expect(add(1, 2)).toBe(3);
  });
});
