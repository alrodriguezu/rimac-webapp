export const generateAgeFromYear = (birthdate: string) => {
    let hoy = new Date()

    let fechaNacimiento = new Date(birthdate?.substring(birthdate.length - 4))

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()

    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()

    if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
        edad--
    }
    return edad
}
//34