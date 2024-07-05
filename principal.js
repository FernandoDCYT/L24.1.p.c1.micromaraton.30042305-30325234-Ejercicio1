import Cl_universidad from "./Cl_universidad.JS";
import Cl_estudiante from "./Cl_estudiante.JS";
//instancia
let est1 = new Cl_estudiante("Luis", 16, "M");
let est2 = new Cl_estudiante("Ana", 19, "F");
let est3 = new Cl_estudiante("Jose", 20, "M");
let est4 = new Cl_estudiante("Carmen", 18, "F");

let universidad = new Cl_universidad();

universidad.procesarEstudiante(est1);
universidad.procesarEstudiante(est2);
universidad.procesarEstudiante(est3);
universidad.procesarEstudiante(est4);

let salida = document.getElementById("salida");
salida.innerHTML=`
Resultado:
<br> Edad Promedio: ${universidad.calcProm()}
<br> Estudiante con la mayor Edad es de: ${universidad.auxNom}
<br> Porcentaje de chicas mayor: ${universidad.calcPorcF18()}%

`