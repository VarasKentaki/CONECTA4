/* 
comprobar.diagonales(tablero,color);


*/

const circulos = document.querySelectorAll('section + section > div > div');
const circulosP = document.querySelectorAll('section + section > div ');
const round = document.querySelector('section');
const hijo = document.createElement('div');
let tablero = [...circulos].toReversed();
let turno = '';
let booleano = false;
function limpiarTablero() {
  let id = 42;
  circulos.forEach((element) => {
    element.classList.remove('bg-red-500', 'bg-yellow-400');
    element.classList.add('bg-white');
  });
  // circulosP.forEach((element) => {
  //   element.setAttribute('id', id--);
  // });
}

round.childNodes.forEach((element) => {
  element.addEventListener('mouseover', agregar);
  element.addEventListener('mouseout', borrar);
  element.addEventListener('mousedown', iniciar);
});
function agregar(e) {
  if (turno) {
    hijo.classList.add(
      'w-4/5',
      'h-4/5',
      'rounded-full',
      'bg-red-500',
      'cursor-none',
      'pointer-events-none',
    );
  } else {
    hijo.classList.add(
      'w-4/5',
      'h-4/5',
      'rounded-full',
      'bg-yellow-400',
      'cursor-none',
      'pointer-events-none',
    );
  }
  if (e.currentTarget.childNodes.length * 1 < 1) {
    e.currentTarget.appendChild(hijo);
  }
  return hijo;
}
function cambiarcolor() {
  return (turno = booleano ? 'bg-yellow-400' : 'bg-red-500');
}
function iniciar(e) {
  colum = e.target.id;
  booleano = booleano ? false : true;
  console.log(booleano);

  circulos[colum].classList.remove('bg-white');
  circulos[colum].classList.add(cambiarcolor());
}
function borrar(e) {
  e.currentTarget.childNodes[0].remove();
}
limpiarTablero();
