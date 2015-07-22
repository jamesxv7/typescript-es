# Introducción
Este libro nace de la idea de poder documentar el aprendizaje de TypeScript. El propósito principal de hacerlo en español es poder brindar el conocimiento adquirido a los diferentes desarrolladores que de una forma u otra les resulta mucho más fácil entender como funciona una tecnología su lengua natural. 

## Brevísima historia de JavaScript
La primera versión de JavaScript fue creada allá para el año 1995 por Brendan Eich en solo 10 días para poder cumplir con el lanzamiento de la beta del nevegador de Netscape Navigator 2.0. El fundador de Netscape, Marc Andreessen, inicialmente lo bautizó Mocha y en septiembre de ese mismo año fue cambiado a LiveScript. En diciembre, con un acuerdo de licencia entre Netscape y Sun Microsystems oficialmente se le otorga el nombre de JavaScript.

Durante los años de 1996 al 1998 la European Computer Manufacturers Association (ECMA) comienza a desarrollar la estándarización del lenguage bajo la especificacián ECMA-262 normalmente conocida como ECMAScript. Algunas de las implementacions más conocidas de este estándar son JavaScript, JScript and ActionScript. Para el 1999 iteración ECMAScript 3 sentó las bases para el desarrollo robusto y moderno de aplicaciones en JavaScript.

Lamentablemente, Microsoft demostró poco interés e intención de implementar debidamente el estándar de la próxima itereación de ECMAScript (ES) o JavaScript en Internet Explorer. De esta forma para el 2003 Microsoft decidó aplazar indefinidamente la implementacion de ES4. Este fue el comienzo del dominio de Internett Explorer como navegador y en mi opinio el proceso de letardo de Microsoft para poder capitalizar en el mercado de Internet a través de la inovación de su nevagador. Esto sumando a una serie de eventos llenos de drama y tencion entre diferentes frentes tecnologicos, Mozilla, Macromedia (later acquired by Adobe), ActionScript 3, Yahoo! y el propio Miscrosoft dieron finalmente la estacada de muerte a ES4 en el 2007.

Mientras tanto en el 2005, Jesse James Garrett a través del white paper Ajax: A New Approach to Web Applications, organiza los metodos y tecnologias que coloca a JavaScript como la piedra angular para crear aplicaciones donde no fuera necesario recargar la webpage y lograr una experiencia similiar a las aplicaciones de escritorio. Ajax fue recibido con brazos abiertos por la comunidad de desarrolladores y dio paso a lo que denomino como la Web 2.0. Otro producto positivo de este resurgir fue la creacion del espacio ES-Harmony destinado a contener las propuestas aprobadas para el idioma.

En el 2009 el estándar ECMAScript 3.1 fue transformado a ECMAScript 5. Esta versión del estándar agregó suficiente **syntax sugar** para mantener felices a los desarrolladores por buen rato (y fue justamente lo que suceció). Entre los cambios fundamentales que ES5 incorporó se encuentran soporte nativo a JSON, actualizó el Object Model, y extendió las funcionales del Prototype Bind, Strict Mode, los Constants, Getters y Setters. A partir de este año el rendimiento de JavaScript aumento exponencialmente. Esto sentó las bases para el nacimientos de proyectos como Gmail, JQuery, Node.js, Meteor, Angular, CoffeeScript y TypeScript solo por mencionar una pequeña cantidad de proyectos y aplicaciones que gracias a la explosión en el rendimiento de JavaScript pudieron ver la luz. 

Se ha planteado la idea de que JavaScript pudiera ser el **lenguage de Assembly para la Web** y aunque suene como una locura, JavaScript juega un papel muy importante en el desarrollo del **Internet de las cosas** practicamente brindando a cualquier desarrollador en JavaScript la oportunidad de integrar técnicamente cualquier aparato a la Web. Entonces, bajo este panorama, no es para menos que Microsoft esté invirtiendo un gran esfuerzo en desarrollar TypeScript haciéndolo accesible a la comunidad de desarrolladores bajo la iniciativa de código abierto.


https://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript
https://en.wikipedia.org/wiki/Brendan_Eich
http://stackoverflow.com/questions/2018731/why-is-javascript-called-javascript-since-it-has-nothing-to-do-with-java
http://www.adaptivepath.com/ideas/ajax-new-approach-web-applications/
https://medium.com/@slsoftworks/javascript-world-domination-af9ca2ee5070
http://www.hanselman.com/blog/JavaScriptisAssemblyLanguagefortheWebPart2MadnessorjustInsanity.aspx

## ¿Que es TypeScript?

TypeScript es un lenguage de programación de codigo abierto desarrollado por Microsoft que al ser compilado genera codigo en Javascript. Has leido correctamente, "lenguage de programación de codigo abierto desarrollado por Microsoft". Ya de por si estas características son más que suficientes para levantar todo tipo de interés. 

practicamente code is compiled into plain JavaScript, which means it can run in any web browser or on a server running technology such as Node.js.

TypeScript is both a language and a set of tools to generate JavaScript.

## ¿Qué problemas resuelve TypeScript?

Provide an optional type system for JavaScript.
Provide planned features from future JavaScript editions to current JavaScript engines.

## El TypeScript type system