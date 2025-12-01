const currentWeather = (temperature) => {
    if(temperature > 25) return "Hace calor"
        else return "Hace frío"
}

// console.log(currentWeather(24))

/*
    Realizar una función que reciba un código(weatherCode) de temperatura.
    De acuerdo al código recibo, retornar un mensaje:
    Code   Description
    0           Clear sky
    1, 2, 3     Mainly clear, partly cloudy, and overcast
    45, 48      Fog and depositing rime fog
    
*/

const weatherMessage = weatherCode => {
    if(weatherCode === 0) {
        return "Clear sky"
    } else if(weatherCode === 1 || weatherCode === 2 || weatherCode === 3) {
        return "Mainly clear, partly cloudy, and overcast"
    } else if(weatherCode === 45 || weatherCode === 48) {
        return "Fog and depositing rime fog"
    } else {
        return "Code not found"
    }
}
console.log(weatherMessage(45))