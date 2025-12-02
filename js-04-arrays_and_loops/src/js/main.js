const techStack = ["HTML", "CSS", "JavaScript"]

// accediendo a segundo elemento
console.log(`Segundo elemento: ${techStack[1]}`)

// accediendo a último elemento
let length = techStack.length
console.log(`Último elemento: ${techStack[length - 1]}`)

// Modificando elementos
techStack[length] = "TypeScript"
console.log(techStack)

// Agregando elementos en una posición específica de un array
const guestList = ['Luis', 'Juan']

const addGuestEnd = guest => {
    guestList.push(guest)
    return guestList
}
const addGuestStart = guest => {
    guestList.unshift(guest)
    return guestList
}
const removeGuest = position => {
    guestList.splice(position, 1)
    return guestList
}

console.log('Agregando invitado al final: ', addGuestEnd('Mauricio'))
console.log('Agregando invitado al principio: ', addGuestStart('José'))
console.log('Eliminando segundo invitado: ', removeGuest(1))

/* ================================================================
 Ejercicio:
   Crea un array llamado 'taskList' para gestionar tareas.
   1. Agrega 3 tareas usando 'push'.
   2. Muestra la lista completa de tareas.
   3. Las tareas normales se atienden en orden de llegada (FIFO)
   3.1 Retira (elimina) la primera tarea de la lista y muéstrala.
   4. No dan un tarea URGENTE que debe ser atendido inmediatamente.
    Por lo que debes poner al inicio de la lista.
   5. Muestra la lista actualizada.
   6. Atiende (elimina) la primera tarea de la lista y muéstrala.
*/

const taskList = []
taskList.push('Lavar ropa', 'Lavar trastes','Limpiar cuarto')
console.log('Lista inicial: ', taskList)
taskList.shift()
console.log('Lista sin primer tarea: ', taskList)
taskList.unshift('Sacar el pollo del congelador')
console.log('Lista con tarea urgente: ', taskList)
taskList.shift()
console.log('Lista actualizada: ', taskList)

let iteracion = 0

for( ; ; ) {
    console.log('Número de iteración: ', iteracion)
    iteracion++
    if(iteracion === 5) {
        break;
    }
}

let i = 0
while(i <= 5) {
    console.log(i)
    i++
}

// ToDo: Simulación de cajero
// Tienes un array de movimientos: [100.00, -50.00, 200.00, -100.00]
// 1. Usa un ciclo FOR, o WHILE o FOR-OF para recorrer los movimientos.
// 2. Suma los valores a una variable 'totalBalance'.
// 3. Imprime el balance final.
const transactions = [100.00, -50.00, 200.00, -100.00, 500.00];
let totalBalance = 0;

// for (const transaction of transactions) {
//     totalBalance += transaction
// }
// console.log('Balance final: ', totalBalance)

const balance = transactions.reduce(
  (totalBalance, transaction) => totalBalance + transaction,
  0,
);
console.log(balance)