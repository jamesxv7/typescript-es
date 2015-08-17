#Mecanismo de Inferencia


Ordinarily, TypeScript type inference proceeds “bottom-up”: from the leaves of an expression tree to its root. In the following example, TypeScript infers ‘number’ as the return type of the function ‘mul’ by flowing type information bottom up in the return expression.

```typescript
function mul(a: number, b: number) {
    return a * b;
}
```


However, in some limited contexts, inference proceeds “top-down” from the context of an expression. Where this happens, it is called contextual typing. Contextual typing helps tools provide excellent information when a programmer is using a type but may not know all of the details of the type. For example, in the jQuery example below, the programmer supplies a function expression as the second parameter to the ‘get’ method. During typing of that expression, tools can assume that the type of the function expression is as given in the ‘get’ signature and can provide a template that includes parameter names and types.

$.get("http://mysite.org/divContent",
      function (data) {
          $("div").text(data);  // TypeScript infers data is a string
      }
);

Contextual typing is also useful for writing out object literals. As the programmer types the object literal, the contextual type provides information that enables tools to provide completion for object member names.

