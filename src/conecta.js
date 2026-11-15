/* 
comprobar.diagonales(tablero,color);


*/

const circulos = document.querySelectorAll('section + section > div > div');
const circulosP = document.querySelectorAll('section + section > div ');
const round = document.querySelector('section');
const hijo = document.createElement('div');

let turno = '';
let booleano = false;
let contador0 = 0;
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let contador6 = 0;
let gameOver = false;
let columnas = [];
let ganador = '';
function limpiarTablero() {
  // let id = 42;
  circulos.forEach((element) => {
    element.classList.remove('bg-red-500', 'bg-yellow-400');
    element.classList.add('bg-white');
  });
  // circulosP.forEach((element) => {
  //   element.setAttribute('id', id--);
  // });
}

function agregar(e) {
  const hijo = document.createElement('div'); // nuevo cada vez
  hijo.classList.add(
    'w-4/5',
    'h-4/5',
    'rounded-full',
    'cursor-none',
    'pointer-events-none',
    booleano ? 'bg-red-500' : 'bg-yellow-400',
  );
  if (e.currentTarget.childNodes.length < 1) {
    e.currentTarget.appendChild(hijo);
  }
}
function cambiarcolor() {
  return (turno = booleano ? 'bg-yellow-400' : 'bg-red-500');
}

function iniciar(e) {
  const colum = e.target.id;
  const colum0 = [35, 28, 21, 14, 7, 0];
  const colum1 = [36, 29, 22, 15, 8, 1];
  const colum2 = [37, 30, 23, 16, 9, 2];
  const colum3 = [38, 31, 24, 17, 10, 3];
  const colum4 = [39, 32, 25, 18, 11, 4];
  const colum5 = [40, 33, 26, 19, 12, 5];
  const colum6 = [41, 34, 27, 20, 13, 6];
  columnas = [colum0, colum1, colum2, colum3, colum4, colum5, colum6];
  booleano = booleano ? false : true;
  let acertados = 0;
  let acertadosV = 0;

  let color = cambiarcolor();
  if (!gameOver) {
    switch (colum) {
      case '0':
        if (contador0 != 6) {
          circulos[colum0[contador0]].classList.remove('bg-white');
          circulos[colum0[contador0++]].classList.add(color);

          acertados = 1;
          acertadosV = 0;
          for (let i = 0; i < 7; i++) {
            if (circulos[columnas[i][contador0 - 1]]?.classList.contains(color)) {
              acertados++;
            }
          }
          for (let j = 0; j < 5; j++) {
            if (circulos[columnas[0][contador0 - j - 1]]?.classList.contains(color)) {
              acertadosV++;
            }
          }
          if (acertados >= 4 || acertadosV >= 4) {
            gameOver = true;
            ganador = color;
          }
        }

        break;
      case '1':
        if (contador1 != 6) {
          circulos[colum1[contador1]].classList.remove('bg-white');
          circulos[colum1[contador1++]].classList.add(color);
          acertados = 0;
          acertadosV = 0;
          for (let i = 0; i < 7; i++) {
            if (circulos[columnas[i][contador1 - 1]]?.classList.contains(color)) {
              acertados++;
            }
          }
          for (let j = 0; j < 5; j++) {
            if (circulos[columnas[1][contador1 - j - 1]]?.classList.contains(color)) {
              acertadosV++;
            }
          }
          if (acertados >= 4 || acertadosV >= 4) {
            gameOver = true;
            ganador = color;
          }
        }
        break;
      case '2':
        if (contador2 != 6) {
          circulos[colum2[contador2]].classList.remove('bg-white');
          circulos[colum2[contador2++]].classList.add(color);
          acertados = 0;
          acertadosV = 0;
          for (let i = 0; i < 7; i++) {
            if (circulos[columnas[i][contador2 - 1]]?.classList.contains(color)) {
              acertados++;
            }
          }
          for (let j = 0; j < 5; j++) {
            if (circulos[columnas[2][contador2 - j - 1]]?.classList.contains(color)) {
              acertadosV++;
            }
          }
          if (acertados >= 4 || acertadosV >= 4) {
            gameOver = true;
            ganador = color;
          }
        }

        break;
      case '3':
        if (contador3 != 6) {
          circulos[colum3[contador3]].classList.remove('bg-white');
          circulos[colum3[contador3++]].classList.add(color);

          acertados = 0;
          acertadosV = 0;
          for (let i = 0; i < 7; i++) {
            if (circulos[columnas[i][contador3 - 1]]?.classList.contains(color)) {
              acertados++;
            }
          }
          for (let j = 0; j < 5; j++) {
            console.log(circulos[columnas[3][contador3 - j - 1]]?.classList.contains(color));

            if (circulos[columnas[3][contador3 - j - 1]]?.classList.contains(color)) {
              acertadosV++;
            }
          }
          if (acertados >= 4 || acertadosV >= 4) {
            gameOver = true;
            ganador = color;
          }
        }

        break;
      case '4':
        if (contador4 != 6) {
          circulos[colum4[contador4]].classList.remove('bg-white');
          circulos[colum4[contador4++]].classList.add(color);
          acertados = 0;
          acertadosV = 0;
          for (let i = 0; i < 7; i++) {
            if (circulos[columnas[i][contador4 - 1]]?.classList.contains(color)) {
              acertados++;
            }
            e;
          }
          for (let j = 0; j < 5; j++) {
            if (circulos[columnas[4][contador4 - j - 1]]?.classList.contains(color)) {
              acertadosV++;
            }
          }
          if (acertados >= 4 || acertadosV >= 4) {
            gameOver = true;
            ganador = color;
          }
        }

        break;
      case '5':
        if (contador5 != 6) {
          circulos[colum5[contador5]].classList.remove('bg-white');
          circulos[colum5[contador5++]].classList.add(color);
          acertados = 0;
          acertadosV = 0;
          for (let i = 0; i < 7; i++) {
            console.log(circulos[columnas[i][contador5 - 1]]?.classList.contains(color));

            if (circulos[columnas[i][contador5 - 1]]?.classList.contains(color)) {
              acertados++;
            }
          }
          for (let j = 0; j < 5; j++) {
            if (circulos[columnas[5][contador5 - j - 1]]?.classList.contains(color)) {
              acertadosV++;
            }
          }
          if (acertados >= 4 || acertadosV >= 4) {
            gameOver = true;
            ganador = color;
          }
        }

        break;
      case '6':
        if (contador6 != 6) {
          circulos[colum6[contador6]].classList.remove('bg-white');
          circulos[colum6[contador6++]].classList.add(color);
          acertados = 0;
          acertadosV = 0;
          for (let i = 0; i < 7; i++) {
            if (circulos[columnas[i][contador6 - 1]]?.classList.contains(color)) {
              acertados++;
            }
          }
          for (let j = 0; j < 5; j++) {
            if (circulos[columnas[4][contador6 - j - 1]]?.classList.contains(color)) {
              acertadosV++;
            }
          }
          if (acertados >= 4 || acertadosV >= 4) {
            gameOver = true;
            ganador = color;
          }
        }

        break;
      default:
        break;
    }
  } else {
    if (ganador == 'bg-red-500') {
      p.textContent = 'GANARON LOS ROJOS';
    } else {
      p.textContent = 'GANARON LOS AMARILLOS';
    }
  }
}
const p = document.querySelector('p');
function borrar(e) {
  e.currentTarget.childNodes[0].remove();
}

const boton = document.querySelector('button').addEventListener('click', iniciarGame);
function iniciarGame() {
  turno = '';
  booleano = false;
  contador0 = 0;
  contador1 = 0;
  contador2 = 0;
  contador3 = 0;
  contador4 = 0;
  contador5 = 0;
  contador6 = 0;
  gameOver = false;
  columnas = [];
  p.textContent = '';
  ganador = '';
  limpiarTablero();
  round.childNodes.forEach((element) => {
    element.addEventListener('mouseover', agregar);
    element.addEventListener('mouseout', borrar);
    element.addEventListener('mousedown', iniciar);
  });
}
