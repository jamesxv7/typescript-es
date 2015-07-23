// Boolean
var isDone: boolean = false;

/* Errores 
var isDone = 1;
var isDone = False;
*/

// Number
var age: number = 33;
var imageId: number = 2844349
var savings: number = 23.47

// String
var name: string = "Jaime"
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

// Template String
var sentence: string = `Hello, my name is ${ name }.
I'll be ${ age + 1 } years old next month.`
alert(sentence)