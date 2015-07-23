# Tipos básicos
El término tipo de variable se refiere a la descripción de la propiedad que alojará la variable. Esto provee un mecanismo para saber que tipo de data contiene una variable. Typescript provee los siguientes tipos:

## Boolean
```typescript
var isDone: boolean = false;
```
La belleza de trabajar con un sistema que permite strong types es que si utilizamos como base en  codigo anterior el compilador de TypeScript nos podra corregir en tiempo real de errors que podamos generar en nuestro codigo. Por ejemplo: 

```typescript
// Mostrará un error indicando ya que variable isDOne no es de tipo numérica.
var isDone: boolean = 1;

// Mostrará un error indicando que no reconoce la palabra Falsa.
var isDone: boolean = False;
```

## Number
Al igual que en JavaScript, toda data numérica en TypeScript es definida como flotante y se denomina como *number*. En JavaScript no existe cosa tal como tipo *float*. *double* o *integer*. Javascript hace distinción entre valores enteros o punto-flotante, caracteristica que TypeScript muy hereda. Todas las variables del siguiente ejemplo son de tipo *number*.

```typescript
var age: number = 33;
var imageId: number = 2844349;
var savings: number = 23.47
```

## String
Para representar tipos de datos de texto se utiliza el tipo *string*.TypeScript, al igual que JavaScript utiliza la comilla double (") o sencilla (') para describir un elemento tipo *string*.

> Consejo: Siempre trata de mantener consistencia en el uso de la comilla. Define un estilo y apegate a el.

> Consejo: Si como parte de tu proyecto utilizas JSON, cabe señalar que en el sentido estricto, los strings en JSON se representan con comillas dobles. Claro, muchas librerias utilizan solo comillas simples, pero ten esto en cosideración este hecho al momento crear un API e implementar el estándar JSON.



## Array

## Enum

## Any

## Void