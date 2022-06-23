class Alumno {
    constructor(nombre, apellido, inscrito, ...calificacion) {
        this.nombre = nombre
        this.apellido = apellido
        this.inscrito = inscrito
        this.calificacion = calificacion
    }
    estaInscrito(){
        if(this.inscrito)
        return "El alumno etsa inscrito"
        else
        return "El alumno no esta inscrito"
    }
    obtenerInicialesDelAlumno(){
        return (`Iniciales: ${this.nombre.substring(0,1)} ${this.apellido.substring(0,1)}`)
    }
    obtenerNombreCompleto(){
        return (`Alumno: ${this.nombre} ${this.apellido}`)
    }
    promedioCalf(Calificaciones){
        let i = 0, sum = 0, ArrayLen = Calificaciones.length;
        while (i < ArrayLen) {
            sum = sum + Calificaciones[i++];
        }
        return sum / ArrayLen;
    }
    aprobado(){
        if(Gibran.promedioCalf(Calificaciones) < 6.0){
            return "Alumno NO APROBADO"
        }
        else{
            return "ALUMNO APROBADO"
        }
    }
}

let Gibran = new Alumno('Gibran', 'Campero', true, 6,7,4,5.5,10,9,8.2);
let Calificaciones = Gibran.calificacion;
console.log(Gibran.estaInscrito());
console.log(Gibran.obtenerNombreCompleto());
console.log(Gibran.obtenerInicialesDelAlumno());
console.log(Calificaciones);
console.log("Promedio de calificaciones: " + Gibran.promedioCalf(Calificaciones));
console.log(Gibran.aprobado);