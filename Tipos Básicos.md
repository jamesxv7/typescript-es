# Tipos básicos
El término tipo de variable se refiere a la descripción de la propiedad que obtendrá la variable. Esta descripción provee el mecanismo para saber de antemano que tipo de data contiene. Esto le brinda a las diferentes herramientas de desarrollo la capacidad para razonar acerca de tu código. Typescript provee los siguientes tipos:

## Boolean

```typescript
var isDone: boolean = false;
```
La belleza de trabajar con un sistema que permite *strong types* es que si utilizamos como ejemplo el código anterior el compilador de TypeScript nos podrá corregir en tiempo real de errors que podamos generar en nuestro código. Por ejemplo: 

```typescript
// Mostrará un error indicando que la variable isDone no es de tipo numérica.
var isDone: boolean = 1;

// Mostrará un error indicando que no reconoce la palabra False como una propiedad booleana.
var isDone: boolean = False;
```

## Number
Al igual que en JavaScript, toda data numérica en TypeScript es definida como flotante y se denomina como *number*. En JavaScript no existen variables con tipos *float*, *double* o *integer*. Javascript no hace distinción entre valores enteros o punto-flotante, característica que TypeScript muy bien hereda (puede ser cualquiera de ellos aunque internamente, JavaScript representa todos los números como valores punto flotante). Todas las variables del siguiente ejemplo son de tipo *number*.

```typescript
var age: number = 33;
var imageId: number = 2844349;
var savings: number = 23.47
```

## String
Para representar tipos de datos de texto se utiliza el tipo *string*. TypeScript, al igual que JavaScript utiliza la comilla double (") o sencilla (') para describir un elemento tipo *string*.

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

/* Error
shortDescription = "Doblar a la "izquierda".
 */
```

> Consejo: Siempre trata de mantener consistencia en el uso de la comilla. Define un estilo y apégate a el.

### Si usas JSON...
Si como parte de tu proyecto utilizas JSON, cabe señalar que en el sentido estricto, los strings en JSON se representan con comillas dobles. Claro, muchas librerias utilizan solo comillas simples, pero ten esto en cosideración al momento crear un API e implementar el estándar JSON.

### Template Strings
Con la implementación del estándar ECMAScript 6 se ha logrado mejorar la manera de trabajar con cadenas (*strings*) a través de la opción de *template strings*. Esta peculiar manera de trabajar con los *strings* nos brinda de posilidad de extender el funcionamiento de los mismos a través de expresiones que nos pueden ayudar grandemente a organizar y reducir la cantidad de código en nuestro proyecto. Veamos un ejemplo:

```typescript
var rectangle = { height: 20, width: 10 };
var areaMessage = `Rectangle area is ${rectangle.height * rectangle.width}`;
```

Para poder hacer uso de los *template string* debemos limitar el string o la expresión utilando el caracter backtick (\`). Dentro de los limitadores `${}` podemos llamar variables y ejecutar diferentes tipos de expresiones.

## Enum
Enum es un datatype especial muy similiar a como se implementa en C# o en otros lenguajes donde existen datatypes específicos para trabajar más eficientemente con listas enumeradas. Observemos el siguiente ejemplo:

```typescript
enum Days {Sat, Sun, Mon, Tue, Wed, Thu, Fri};
```

Por default al primer elemento de esta lista se le asigna el numero 0. 

```typescript
alert(Days[0]);
```

El mensaje mostrara el string Sat. Si deseamos modificar este comportamiento lo podemos lograr con tan solo asignarle un número al primer elemento de la lista.

```typescript
enum Days {Sat=1, Sun, Mon, Tue, Wed, Thu, Fri};
```

Y por esa misma línea si deseamos alterar el orden total del conjunto podemos hacerlo asignando un valor a cada elemento.

```typescript
enum Days {Sat=3, Sun=1, Mon=5, Tue=2, Wed=6, Thu=4, Fri=10};
```

Lo bueno de este datatype es que podemos acceder el elmento ya sea por su índice o por su nombre.

```typescript 
var firstDay: any = Days.Sun;
firstDay = Days[1];
```

## Any
En el ejemplo anterior vimos que utilize el tipo any para definir la variable `firstDay`. En algunas ocasiones no vamos a tener muy claro que tipo de variable necesitamos utilizar. Al hacer uso del tipo Any estamos declarando que el contenido de la varibale puede ser dinámico. Es una excelente herramienta para incorporar librerias externas a nuestros proyectos. Usando Any le estamos diciendo al compilador que no se preocupe por el tipo de esta variable. Es por eso que pude usar la variable `firstDay` para representar el valor del string y el numérico la lista `Days`.
Cuando creamos una varible y omitimos su tipo por defualt recibe el tipo Any.

## Void
Lo opuesto a Any seria el tipe Void, lo cual significa la carencia de algun tipo. Muy comunmente usado en la definicion de variables y/o funciones que no devuelven valor alguno.

```typescript
function weatherMsg(): void {
    alert("El día de hoy está nublado.");
}
```
## Null
Que debemos saber del valor `null`. Null es un sub tipo de todos los tipos primitivos (con excepcion de `undefined`). Es un valor para indicar la ausecia de algun valor. Null no puede referenciarse a si mismo. Veamos varios ejemplos:

```typescript 
var aCounter: number = null; // Todo tipo primitivo puede ser null 
var name = null; // Es igual a la siguiente expresion name: any = null 
var e: Null; // Error, no es posible hacer referencias a un tipo Null
```

## Undefined
Que no te tome por sorpresa pero segun la el documento de espeficiacion de TypeScript undefined es casi identico al tipo null. En realidad se diferencian en que undefined indica que la variable ha sido declarada pero no contiene valor alguno. En cambio null lo utilizamos para asignar la ausencia de valor. Te mostrare varios ejemplos:

```typescript 
var aCounter: number = undefined; // Todo tipo primitivo puede ser undefined 
var name = undefined; // Es igual a la siguiente expresion name: any = undefined 
var e: Undefined; // Error, no es posible hacer referencias a un tipo Undefined
```

Si deseas abundar en el tema te recomiendo la siguiente [entrada](http://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript) en StackOverflow.

