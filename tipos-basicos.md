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

## String

## Array

## Enum

## Any

## Void