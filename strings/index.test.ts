import { it, expect, describe } from "bun:test";
import "./index";

describe("String prototype extensions", () => {

  it("should expand tabs to spaces", () => {
    expect("The\tquick\tbrown".expandtabs()).toBe(
      "The    quick    brown"
    );
    expect("The\tquick\tbrown".expandtabs(4)).toBe("The    quick    brown");
  });

  it("should format strings using positional arguments", () => {
    expect("Hello {0}, you are {1} years old".format("Alice", 25)).toBe(
      "Hello Alice, you are 25 years old"
    );
  });

  it("should format strings using named arguments", () => {
    expect(
      "Hello {name}, you are {age} years old".format_map({
        name: "Alice",
        age: 25,
      })
    ).toBe("Hello Alice, you are 25 years old");
  });

  it("should check if string is decimal", () => {
    expect("123".isdecimal()).toBe(true);
    expect("12.3".isdecimal()).toBe(false);
  });

  it("should check if string is an identifier", () => {
    expect("validIdentifier".isidentifier()).toBe(true);
    expect("123Invalid".isidentifier()).toBe(false);
  });

  it("should check if string is numeric", () => {
    expect("123".isnumeric()).toBe(true);
    expect("12.3".isnumeric()).toBe(true);
    expect("12.3.4".isnumeric()).toBe(false);
  });

  it("should check if string is printable", () => {
    expect("Hello!".isprintable()).toBe(true);
    expect("Hello\n".isprintable()).toBe(false);
  });

  it("should create a translation map", () => {
    const trans = "abc".maketrans("abc", "xyz");
    expect(trans.get("a")).toBe("x");
    expect(trans.get("b")).toBe("y");
  });

  it("should partition a string", () => {
    expect("hello world".partition(" ")).toEqual(["hello", " ", "world"]);
  });

  it("should rpartition a string", () => {
    expect("hello world".rpartition(" ")).toEqual(["hello", " ", "world"]);
  });

  it("should split lines", () => {
    expect("hello\nworld".splitlines()).toEqual(["hello", "world"]);
  });

  it("should swap case of string", () => {
    expect("HeLLo".swapcase()).toBe("hEllO");
  });

  it("should translate characters", () => {
    const table = new Map([
      ["a", "x"],
      ["b", "y"],
    ]);
    expect("abc".translate(table)).toBe("xyc");
  });

  it("should zero-fill a string", () => {
    expect("42".zfill(5)).toBe("00042");
  });

  it("should convert string to title case", () => {
    expect("helLo woRld".title()).toBe("Hello World");
  });
});
