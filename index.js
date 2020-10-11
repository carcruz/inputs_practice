// VARIABLES
// tipo de acceso variable -> const & let
const fruta = "apple";

// tipo de dato ->
//  Strings(cadena de texto)
//  Number(integer, double)
//  Boolean
//  Objects
//  Arrays (listas)
//  Functions*

// Strings
const text_0 = 'Lulu';
const text_1 = "";
// template string
const text_2 = ``;

// Numbers
// interger
const num = 23;
// double -> decimales
const double = 23.01;

// Boolean
const bool = true;

// Objects
const carro = {
  color: 'red'
}

// Arrays
const arreglo = ['hola', 'mundo', 'genial'];

// --------- --------- --------- --------- //

// Functions
// no retorno - solo hacen cosas
function saludar() {
  const persona = 'Julio';
  console.log('hola', persona);
}

// retorno - retornan cosas
function retornarNombreCompleto(nombre, apellido) {
  const full_name = `${nombre} ${apellido}`;
  return full_name;
}

saludar();

// const nombre = 'Susi';
// const apellido = 'Castillo';
const nombreCompleto = retornarNombreCompleto('Susi', 'Castillo');
const nombreCompleto_2 = retornarNombreCompleto('Lulu', 'Castillo');
const nombreCompleto_3 = retornarNombreCompleto('Lulu', 'Rojas');

console.log(nombreCompleto);
console.log(nombreCompleto_2);
console.log(nombreCompleto_3);
