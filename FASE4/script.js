function ProcesarRespuesta() {
    let total = 5
    let Puntos = 0;

    let myForm = document.forms["formulario"];
    let respuestasCorrectas = ["C", "B", "A", "A", "A" ];  

    for (let i =1; i <= total; i++){
        if(myForm["r" + i].value == null ||
            myForm["r" + i].value == ''){
            alert("Por Favor Responda Todas Las Preguntas");
            return false;
        } else {
            if(myForm["r" + i].value === respuestasCorrectas[i - 1])
                Puntos++;
        }
    }
    let resultado = document.getElementById('resultado')
    resultado.innerHTML='Tu calificacion es de: ' + Puntos+ ' de un total de '+total+ ' posibles ';
    return false;
    }