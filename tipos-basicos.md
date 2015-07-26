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

```typescript
// String
var name: string = "Jaime";
var lastName: string = "Olmo";

// Como concadenar dos strings
alert(name + " " + lastName)

// Cadena de escape 
var shortDescription: string = "Doblar a la 'derecha'."
shortDescription = "Doblar a la \"izquierda\"."
shortDescription = 'Continuar a la \'izquierda\'.'

// Como concadenar strings y variables tipo number
shortDescription = "Su edad es " + age + " años.";
alert(shortDescription);

/* Errores
shortDescription = "Doblar a la "izquierda".
 */
 ```

> Consejo: Siempre trata de mantener consistencia en el uso de la comilla. Define un estilo y apegate a el.

### Si usas JSON...
Si como parte de tu proyecto utilizas JSON, cabe señalar que en el sentido estricto, los strings en JSON se representan con comillas dobles. Claro, muchas librerias utilizan solo comillas simples, pero ten esto en cosideración este hecho al momento crear un API e implementar el estándar JSON.

### Template Strings
Con la implementacion del estándar ECMAScript 6 se han logrado mejorar la manera de trabajar con cadenas (strings) a través de la opción de *template strings*. Esta peculiar manera de trabajar con los string nos brinda de posilidad de exter el funcionamiento de los mismos a través de expresiones que nos pueden ayudar grandemente a organizar y reducir la cantidad de código en nuestro proyecto. Veamos un ejemplo: 

```typescript
var rectangle = { height: 20, width: 10 };
var areaMessage = `Rectangle area is ${rectangle.height * rectangle.width}`;
```

Para poder hacer uso de los *template string* debemos limitar el string o la expresión utilando el caracter backtick (\`). Dentro de los limitadores `${}` podemos llamar variables y ejecutar diferentes tipos de expresiones.

## Array
Podemos crear arreglos de dos formas diferentes. Una de ellas es usando el tipo de arrglo que deseamos seguido de '[]':

```typescript
var list:number[] = [1, 2, 3];
```
La segunda es a traves de la forma genérica usando la expresión Array<elemType>:

```typescript
var list:Array<number> = [1, 2, 3];
```
> Consejo: Los arreglos puede ser de cualquier tipo - number, string e incluso array. 

###Tuple Types

## Enum

## Any

## Void