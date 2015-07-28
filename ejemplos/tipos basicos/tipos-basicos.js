// Boolean
var isDone = false;
/* Errores
var isDone = 1;
var isDone = False;
*/
// Number
var age = 33;
var imageId = 2844349;
var savings = 23.47;
// String
var name = "Jaime";
var lastName = "Olmo";
// Como concadenar dos strings
//alert(name + " " + lastName)
// Cadena de escape 
var shortDescription = "Doblar a la 'derecha'.";
shortDescription = "Doblar a la \"izquierda\".";
shortDescription = 'Continuar a la \'izquierda\'.';
// Como concadenar strings y variables tipo number
shortDescription = "Su edad es " + age + " años.";
//alert(shortDescription);
/* Errores
shortDescription = "Doblar a la "izquierda".
 */
// Template String
var sentence = "Hello, my name is " + name + ".\nI'll be " + (age + 1) + " years old next month.";
//alert(sentence)
// Arrays
// Tuple array
var roomInfo;
roomInfo = [101, "Room 1"];
// roomInfo= ["102", "Room 2"]; compiler error
// roomInfo.push("201-A","Room 38"); for the compiler this is Ok [researching]
roomInfo = [201, "Habitacion 38"];
alert(roomInfo);
