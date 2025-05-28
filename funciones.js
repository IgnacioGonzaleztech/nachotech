function enviarEncuesta(){
    const form= document.getElementById("encuesta");
    console.log(form["actividad"].value);
    console.log(form["actividad2"].value);
    console.log(form["actividad3"].value);
    console.log(form["actividad4"].value);
    console.log(form["actividad5"].value);
    console.log(form["actividad6"].value);
    let Arquitectura=0;
    let Administracion=0;
    let Comunicacion=0;
    let Derecho=0;
    let Diseño=0;
    let Economia=0;
    let Ingsistemas=0;
    let Ingindustrial=0;
    let Medicina=0;
    let Psicologia=0;
    let Veterinaria=0;

    if(form["actividad"].value==1){
        Economia=Economia+1;
    }
    if(form["actividad"].value==2){
        Ingindustrial=Ingindustrial+1;
        Ingsistemas=Ingsistemas+1;
    }
    if(form["actividad"].value==3){
        Diseño=Diseño+1;
        Arquitectura=Arquitectura+1;
    }
    if(form["actividad"].value==4){
        Psicologia=Psicologia+1;
        Derecho=Derecho+1;
        Medicina=Medicina+1;
    }
     if(form["actividad2"].value==1){
        Ingsistemas=Ingsistemas+1;
    }
    if(form["actividad2"].value==2){
        Medicina=Medicina+1;
    }
    if(form["actividad2"].value==3){
        Comunicacion=Comunicacion+1;
        Arquitectura=Arquitectura+1;
    }
    if(form["actividad2"].value==4){
        Administracion=Administracion+1;
        Derecho=Derecho+1;
    }
     if(form["actividad3"].value==1){
        Ingsistemas=Ingsistemas+1;
    }
    if(form["actividad3"].value==2){
        Medicina=Medicina+1;
        Veterinaria=Veterinaria+1;
    }
    if(form["actividad3"].value==3){
        Comunicacion=Comunicacion+1;
        Diseño=Diseño+1;
    }
    if(form["actividad3"].value==4){
        Administracion=Administracion+1;
        Psicologia=Psicologia+1;
    }
     if(form["actividad4"].value==1){
        Economia=Economia+1;
        Ingsistemas=Ingsistemas+1;
    }
    if(form["actividad4"].value==2){
        Veterinaria=Veterinaria+1;
    }
    if(form["actividad4"].value==3){
        Comunicacion=Comunicacion+1;
        Diseño=Diseño+1;
    }
    if(form["actividad4"].value==4){
        Psicologia=Psicologia+1;
        Derecho=Derecho+1;
    }
    if(form["actividad5"].value==1){
        Ingsistemas=Ingsistemas+1;
        Ingindustrial=Ingindustrial+1;
    }
    if(form["actividad5"].value==2){
        Veterinaria=Veterinaria+1;
        Ingindustrial=Ingindustrial+1;
    }
    if(form["actividad5"].value==3){
        Comunicacion=Comunicacion+1;
        Arquitectura=Arquitectura+1;
    }
    if(form["actividad5"].value==4){
        Psicologia=Psicologia+1;
        Derecho=Derecho+1;
    }
    if(form["actividad6"].value==1){
        Ingsistemas=Ingsistemas+1;
    }
    if(form["actividad6"].value==2){
        Veterinaria=Veterinaria+1;
    }
    if(form["actividad6"].value==3){
        Diseño=Diseño+1;
        Arquitectura=Arquitectura+1;
    }
    if(form["actividad6"].value==4){
        Administracion=Administracion+1;
        Derecho=Derecho+1;
    }
localStorage.setItem("Carrera1","Administracion");
window.location.href="Resultado.html"   
}
function mostrarEncuesta(){
    

}
    