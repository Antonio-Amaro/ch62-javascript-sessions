/**
 * Modifica el título principal de la página
 * @param {string} titleId El ID del elemento del título a modificar
 */

export const changePrincipalTitle = titleId => {
    const principalTitle = document.getElementById(titleId)
    if(principalTitle) {
        principalTitle.innerText = "OOP in JS, Cohorte 62"
    } else {
        console.warn(`Element with id: ${titleId} not found`)
    }
}