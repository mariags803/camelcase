import {camelcase} from "../camelcase";

describe("Camel case converter",()=>{
    it("Allows empty text", ()=>{
        expect(camelcase("")).toBe("");
    });
    it("Allows capitalized word", ()=>{
        expect(camelcase("Foo")).toBe("Foo");
    });
    it("Joins capitalized words separated by spaces", ()=>{
        expect(camelcase("Foo Bar")).toBe("FooBar");
    });
    it("Joins capitalized words separated by hyphens and underscores'", ()=>{
        expect(camelcase("Foo_Bar-Foo")).toBe("FooBarFoo");
    });
    it("Converts a not capitalized word in capitalized word", ()=>{
        expect(camelcase("foo")).toBe("Foo");
    });
    it("Converts all not capitalized words in capitalized words", ()=>{
        expect(camelcase("foo_bar foo-bar")).toBe("FooBarFooBar");
    });
});