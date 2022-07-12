import {camelcase} from "../camelcase";

describe("Camel Case should",()=>{
    it("Text = '' retuns ''", ()=>{
        const result = camelcase("");
        const expected = "";
        expect(result).toBe(expected);
    });
    it("Text = 'Foo' retuns 'Foo'", ()=>{
        const result = camelcase("Foo");
        const expected = "Foo";
        expect(result).toBe(expected);
    });
    it("Text = 'Foo Bar' retuns 'FooBar'", ()=>{
        const result = camelcase("Foo Bar");
        const expected = "FooBar";
        expect(result).toBe(expected);
    });
    it("Text = 'Foo_Bar-Foo' retuns 'FooBarFoo'", ()=>{
        const result = camelcase("Foo_Bar-Foo");
        const expected = "FooBarFoo";
        expect(result).toBe(expected);
    });
    it("Text = 'foo' retuns 'Foo'", ()=>{
        const result = camelcase("foo");
        const expected = "Foo";
        expect(result).toBe(expected);
    });
    it("Text = 'foo_bar foo-bar' retuns 'FooBarFooBar'", ()=>{
        const result = camelcase("foo_bar foo-bar");
        const expected = "FooBarFooBar";
        expect(result).toBe(expected);
    });
});