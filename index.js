// Create Rrefresh Update Delete
// To-do

// GLOBALES
const appDOM = document.querySelector("#app");
const listDOM = document.querySelector("#todo-list");
const tareas = [
  {
    nombre: "tarea mate",
    desc: "...",
  },
  {
    nombre: "tarea civica",
    desc: "...",
  },
  {
    nombre: "tarea espa",
    desc: "...",
  },
];
const totalTareas = tareas.length;

function listarEnDOM() {
  // CICLO
  for (let i = 0; i < totalTareas; i++) {
    const tarea = tareas[i];
    const newElementDOM = document.createElement('li');
    newElementDOM.textContent = tarea.nombre;
    listDOM.appendChild(newElementDOM);
  }
}

listarEnDOM();

// creacion de Nodes
// 1. crear Nodes en el JS
// 2. inyect en HTML
function agregarTextoBienvenida(texto = de) {
  // document.createElement: crear nodos
  const introDOM = document.createElement("p");
  // style: alterar estilo
  introDOM.style.color = "green";
  // textContent: agregar contenido de texto
  introDOM.textContent = texto;
  // console.log(introDOM);
  // appendChild: agregar nodo hijo
  appDOM.appendChild(introDOM);
}
// ejecucion
agregarTextoBienvenida('Bienvenidos a mi to-do');

// 1. function
// tipos: ejecucion
function inprimirEnConsola(texto = "") {
  console.log(texto);
}
// inprimirEnConsola();
// tipos: returno
function suma(a, b) {
  return a + b;
}
const result = suma(3333, 3);

// 2. Arrow function
// const agregarSaludo = (text = '') => {
//   console.log(text);
// }