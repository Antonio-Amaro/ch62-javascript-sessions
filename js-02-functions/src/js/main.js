const printFullName = (firstName, lastName) => `${firstName} ${lastName} estudiante de la Ch62`;

console.log(printFullName('Antonio', 'Amaro'))

const calculateArea = ( base = 10, height = 5 ) => `El área del triángulo es: ${(base * height) / 2} m2`
console.log(calculateArea())