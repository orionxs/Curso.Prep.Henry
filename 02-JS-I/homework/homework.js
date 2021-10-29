// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola Mundo';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 20;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str;
}

function suma(x, y) {
 var resultado = (x + y);
 return resultado;
}

function resta(x, y) {
  var resultado = (x - y);
  return resultado;
}

function multiplica(x, y) {
  var resultado = (x * y);
  return resultado;
}

function divide(x, y) {
  var resultado = (x / y);
  return resultado;
}

function sonIguales(x, y) {
  if (x === y)
  {return true;
               }

  return false;
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length){
    return true;
  }
    return false;
}
  

function menosQueNoventa(num) {
  if (num < 90){
    return true;
  }
    return false;
}
  

function mayorQueCincuenta(num) {
  if (num > 50){
    return true;
  }
    return false;
}
  

function obtenerResto(x, y) {
  var resultado = (x % y);
  return resultado;
  
}

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
  

function esImpar(num) {
  if (num % 2 === 1){
    return true;
  }
    return false;
}

function elevarAlCuadrado(num) {
  return Math.pow(num, 2);
  
}

function elevarAlCubo(num) {
  return Math.pow(num, 3);
  
}

function elevar(num, exponent) {
  var potencia = Math.pow(num, exponent);
   return potencia; 
}

function redondearNumero(num) {
 return Math.round (num);   
}

function redondearHaciaArriba(num) {
  return Math.ceil (num); 
}

function numeroRandom() {
  return Math.random();
}

function esPositivo(numero) {
  if (numero > 0) {
    return "Es positivo";
  }
  else if (numero < 0){
    return "Es negativo";
  }
  return false;
}
  

function agregarSimboloExclamacion(str) {
  return str + '!';
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  return nombre + ' ' + apellido;
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  
}

function obtenerSaludo(nombre) {
  return 'Hola' + ' ' + nombre + '!';
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
}

function obtenerAreaRectangulo(alto, ancho) {
  var area = (alto * ancho);
  return area;
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
}


function retornarPerimetro(lado){
  return (lado + lado + lado + lado);
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
}


function areaDelTriangulo(base, altura){
  return (base * altura / 2)
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}


function deEuroAdolar(euro){
  return (euro * 1.20);
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}


function esVocal(letra){
  if (letra.length > 1 ){
    return 'Dato incorrecto';
  }
  else if (letra === 'a'|| letra === 'e' || letra ==='i' || letra === 'o' || letra === 'u' ){
    return 'Es vocal';
  }
  return 'Dato incorrecto';
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
