/**
 * Sustituye la imagen de decoración por la imagen indicada
 * @param {string} imageName Nombre de la imagen que se desea asignar con su extensión ".jpg .png etc."
 */

export const changeDecorationImage = imageName => {
    const currentImage = document.getElementById('logo')
    if(currentImage) {
        currentImage.src = `../../assets/img/${imageName}`
    } else {
        console.warn('Element "logo" not found')
    }
}