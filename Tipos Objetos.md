#Tipos Objetos
A diferencia de los tipos primitivos mencionados en la sección de Tipos Básicos los tipos Objectos son complejos en el sentido que poseen 

properties, call signatures, construct signatures, and index signatures, collectively called members.

## Function
## Array
Podemos crear arreglos de dos formas diferentes. Una de ellas es usando el tipo de arreglo que deseamos seguido de `[]`:

```typescript
var list:number[] = [1, 2, 3];
```

La segunda es a través de la forma genérica usando la expresión Array<elementType>:

```typescript
var list:Array<number> = [1, 2, 3];
```

> Consejo: Los arreglos puede ser de cualquier tipo - number, string e incluso array. 

## Tuple Types
JavaScript no posee un mecanismo para la creación de objectos tipo Tuple. TypeScript va un poco mas allá y por el momento se puede decir que provee una pseudo implementación para objectos tipo Tuple a través de arreglos. TypeScript utiliza arreglos en donde se puede determinar el tipo de cada índice individualmente. Dicho de otra forma el arreglo puede contener tipos diferentes en si mismo. Veamos un ejemplo:

```typescript
var tupleArray: [number, string];
tupleArray = [101, "Habitacion 1"]
```

Si lo queremos aplicar a la creación de una interface lo podemos hacer de la siguiente manera:

```typescript
interface PopulationValues extends 
Array<string | number | number | number> {
	0: string;
	1: number;
	2: number;
	3: number;
}	

var countries: PopulationValues = ["PR", 3, 3.2, 4];
```

## Object
## Constructors
## Members
## Union
## Alias
## Parameters
## Named
=======
Class and interface types may be generic types which have one or more type parameters. 
