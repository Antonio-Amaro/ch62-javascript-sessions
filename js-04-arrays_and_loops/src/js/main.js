const techStack = ["HTML", "CSS", "JavaScript"]

// accediendo a segundo elemento
console.log(`Segundo elemento: ${techStack[1]}`)

// accediendo a último elemento
let length = techStack.length
console.log(`Último elemento: ${techStack[length - 1]}`)

// Modificando elementos
techStack[length] = "TypeScript"
console.log(techStack)