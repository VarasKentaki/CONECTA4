<!--
# IES Venancio Blanco - DAW2A - Desarrollo Web en Entorno Cliente
# Prueba Individual Práctica – Curso 2025-2026
## 📝 Prueba Individual Práctica - Parte A
## **JS Vanilla - "Conecta 4"**
-->

### CONSIDERACIONES GENERALES DE EVALUACIÓN

Esta prueba utiliza una "doble capa de evaluación":
- Nota de prueba (global).
- Evaluación de los Resultados de Aprendizaje (RAs) del módulo Desarrollo Web en Entorno Cliente.

Asimismo, la evaluación de los Resultados de Aprendizaje se estructura en dos niveles:

#### 1. RESULTADOS DE APRENDIZAJE INSTRUMENTALES (RA1, RA2, RA3, RA4 y RA5)

Los RA1 a RA5 se consideran resultados de aprendizaje instrumentales debido a su carácter transversal y acumulativo. Su adquisición se evidencia mediante el desarrollo completo de aplicaciones web funcionales y no mediante tareas aisladas o independientes.

Estos RA no se evalúan de forma independiente, sino a través de la evidencia global de la prueba.

Así, los RA instrumentales se consideran superados únicamente cuando el alumnado supera la prueba práctica completa con una calificación igual o superior a 5 sobre 10.

---

#### 2. RESULTADOS DE APRENDIZAJE COMPETENCIALES (RA6)

El RA6 se evalúa mediante indicadores específicos asociados a cada tarea en el código.

- Es evaluable de forma parcial e independiente.
- Permite recuperación por evidencias concretas.
- Puede considerarse superado o no superado según resultados observables en el DOM.


#### MATRIZ DE EVIDENCIAS (RA INSTRUMENTALES)

| RA  | Descripción                             | Evidencias recogidas durante la prueba |
|-----|-----------------------------------------|----------------------------------------|
| RA1 | Arquitecturas y tecnologías cliente web | Estructura del proyecto en un único módulo JS, uso de Vitest para pruebas y ejecución en navegador |
| RA2 | Sintaxis básica del lenguaje            | Uso de variables, condicionales, bucles, estados del juego y control de flujo |
| RA3 | Objetos predefinidos del lenguaje       | Manipulación de `document`, `querySelector`, `classList`, eventos del DOM y estructura HTML |
| RA4 | Estructuras definidas por el usuario    | Funciones como `comprobarGanador`, `crearFicha`, `limpiarTablero` |
| RA5 | Programación orientada a eventos        | Uso de eventos `mouseover`, `mouseleave`, `click` y control del flujo del juego |


## RÚBRICA DE EVALUACIÓN (0 a 8)

## TAREA 1 - Gestión del tablero

### TAREA 1.1 - Limpieza del tablero

| R.A. | Indicador de evaluación                                    | Peso    | Máx.    |
|-----|------------------------------------------------------------ | ------- | ------- |
| RA6 | Accede correctamente a las celdas del tablero mediante DOM  | 3%      | 0.3     |
| RA6 | Modifica clases CSS eliminando estados previos              | 3%      | 0.3     |
| RA6 | Restaura correctamente el estado inicial (`bg-white`)       | 2%      | 0.2     |
| RA6 | Mantiene consistencia del estado del tablero                | 3%      | 0.3     |
|     | **Total**                                                   | **10%** | **1.1** |


## TAREA 2 - Interacción del jugador

### TAREA 2.1 - Previsualización de ficha

| R.A. | Indicador de evaluación                                 | Peso    | Máx.    |
|-----|--------------------------------------------------------- | ------- | ------- |
| RA6 | Detecta correctamente eventos `mouseover`                | 2%      | 0.2     |
| RA6 | Inserta dinámicamente un `div` hijo en la columna        | 5%      | 0.5     |
| RA6 | Aplica correctamente clases Tailwind a la ficha temporal | 2%      | 0.2     |
| RA6 | Evita duplicidad de fichas en una misma columna          | 6%      | 0.6     |
|     | **Total**                                                | **15%** | **1.5** |

### TAREA 2.2 - Eliminación de previsualización

| R.A. | Indicador de evaluación                    | Peso    | Máx.    |
|-----|-------------------------------------------- | ------- | ------- |
| RA6 | Detecta evento `mouseleave` correctamente   | 2%      | 0.2     |
| RA6 | Elimina únicamente la ficha temporal        | 4%      | 0.4     |
|     | **Total**                                   | **6%**  | **0.6** |

## TAREA 3 - Colocación de fichas

### TAREA 3.1 - Lógica de caída de ficha

| R.A. | Indicador de evaluación                         | Peso    | Máx.    |
|-----|------------------------------------------------- | ------- | ------- |
| RA6 | Detecta evento `click` sobre columna válida      | 4%      | 0.4     |
| RA6 | Calcula correctamente la posición inferior libre | 6%      | 0.6     |
| RA6 | Inserta la ficha en la casilla correcta          | 5%      | 0.5     |
| RA6 | Evita colocación en columnas llenas              | 5%      | 0.5     |
|     | **Total**                                        |**20%** | **2.0** |

### TAREA 3.2 - Alternancia de turnos

| R.A. | Indicador de evaluación                             | Peso    | Máx.    |
|-----|----------------------------------------------------- | ------- | ------- |
| RA6 | Alterna correctamente entre amarillo y rojo          | 2%      | 0.2     |
| RA6 | Modifica dinámicamente la clase de la ficha preview  | 3%      | 0.3     |
| RA6 | Mantiene coherencia del estado del turno             | 3%      | 0.3     |
|     | **Total**                                            | **8%**  | **0.8** |

## TAREA 4 - Lógica de victoria

### TAREA 4.1 - Detección de victoria

| R.A. | Indicador de evaluación                      | Peso    | Máx.    |
|-----|---------------------------------------------- | ------- | ------- |
| RA6 | Detecta 4 fichas consecutivas en horizontal   | 5%      | 0.5     |
| RA6 | Detecta 4 fichas consecutivas en vertical     | 5%      | 0.5     |
| RA6 | Bloquea el juego tras victoria                | 3%      | 0.3     |
| RA6 | Muestra mensaje correcto según color          | 2%      | 0.2     |
|     | **Total**                                     | **15%** | **1.5** |

### TAREA 4.2 - Reinicio del juego

| R.A. | Indicador de evaluación                | Peso    | Máx.    |
|-----|---------------------------------------- | ------- | ------- |
| RA6 | Limpia correctamente el tablero         | 1%      | 0.1     |
| RA6 | Reinicia turno a amarillo               | 2%      | 0.2     |
| RA6 | Elimina mensajes de victoria            | 2%      | 0.2     |
|     | **Total**                               | **5%**  | **0.5** |


##  PENALIZACIONES 

| Penalización | Descuento |
|-------------|----------|
| 2 o más errores en consola | -1.0 puntos |
| Uso de librerías externas (jQuery, React, etc.) | Suspenso |
| Modificación de archivos distintos a `conecta.js`  | Suspenso |
| Uso de IA, Copilot o asistencia externa | Suspenso |
| No entrega del vídeo de grabación | Suspenso |
| Uso de plantillas externas | Suspenso |

## 🎯 Resultados de aprendizaje asociados a la parte A:
* **R.A. 1. Selecciona las arquitecturas y tecnologías de programación sobre clientes web, identificando y analizando las capacidades y características de cada una.**
* **R.A. 2. Escribe sentencias simples aplicando la sintaxis del lenguaje y verificando su ejecución sobre navegadores web.**
* **R.A. 3. Escribe código, identificando y aplicando las funcionalidades aportadas por los objetos predefinidos del lenguaje.**
* **R.A. 4. Programa código para clientes web analizando y utilizando estructuras definidas por el usuario.**
* **R.A. 5. Desarrolla aplicaciones web interactivas integrando mecanismos de manejo de eventos.**
* **R.A. 6. Desarrolla aplicaciones web analizando y aplicando las características del modelo de objetos del documento.**



# 📎 LICENCIA Y AUTORÍA

Material educativo del módulo **Desarrollo Web en Entorno Cliente** del CFGS **DAW**.

> © 2026 Jorge García Flores
> Todos los derechos reservados.

