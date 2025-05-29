function enviarEncuesta(){
    const form= document.getElementById("encuesta");
    console.log(form["actividad"][3].checked);
    console.log(form["actividad"].checked);
    console.log(form["actividad2"].value);
    console.log(form["actividad3"].value);
    console.log(form["actividad4"].value);
    console.log(form["actividad5"].value);
    console.log(form["actividad6"].value);
    let carreras=[ 
        {nombre:"Arquitectura",value:0},
        {nombre:"Administracion",value:0},
        {nombre:"Comunicacion",value:0},
        {nombre:"Derecho",value:0},
        {nombre:"Diseño",value:0},
        {nombre:"Economia",value:0},
        {nombre:"Ingsistemas",value:0},
        {nombre:"Ingindustrial",value:0},
        {nombre:"Medicina",value:0},
        {nombre:"Psicologia",value:0},
        {nombre:"Veterinaria",value:0}, 
    ]



    carreras.forEach(c=>{
        if(c.nombre==="Arquitectura"){
            if(form["actividad"][2].checked==true)c.value++;
            if(form["actividad2"][2].checked==true)c.value++;
            if(form["actividad5"][2].checked==true)c.value++; 
            if(form["actividad6"][2].checked==true)c.value++;
        }
        
        if(c.nombre==="Administracion"){

        if(form["actividad2"][3].checked==true)c.value++; 
        if(form["actividad3"][3].checked==true)c.value++;
        if(form["actividad6"][3].checked==true)c.value++;
        }
        if(c.nombre==="Comunicacion"){
            if(form["actividad2"][2].checked==true)c.value++;
            if(form["actividad2"][2].checked==true)c.value++;
            if(form["actividad3"][2].checked==true)c.value++; 
            if(form["actividad4"][2].checked==true)c.value++; 
            if(form["actividad5"][2].checked==true)c.value++; 
        }
        if(c.nombre==="Derecho"){
            if(form["actividad"][3].checked==true)c.value++;
            if(form["actividad"][3].checked==true)c.value++;
            if(form["actividad2"][3].checked==true)c.value++;
            if(form["actividad4"][3].checked==true)c.value++; 
            if(form["actividad5"][3].checked==true)c.value++;
            if(form["actividad6"][3].checked==true)c.value++; 
        }
         if(c.nombre==="Diseño"){
            if(form["actividad"][2].checked==true)c.value++;
            if(form["actividad3"][2].checked==true)c.value++;
            if(form["actividad4"][2].checked==true)c.value++;
            if(form["actividad6"][2].checked==true)c.value++;

        }
         if(c.nombre==="Economia"){
            if(form["actividad"][0].checked==true)c.value++;
            if(form["actividad4"][0].checked==true)c.value++; 
        }
         if(c.nombre==="Ingsistemas"){
          if(form["actividad"][1].checked==true)c.value++;
          if(form["actividad2"][0].checked==true)c.value++;
          if(form["actividad3"][0].checked==true)c.value++;
          if(form["actividad4"][0].checked==true)c.value++;
          if(form["actividad5"][0].checked==true)c.value++;
          if(form["actividad6"][0].checked==true)c.value++;
        }
        if(c.nombre==="Ingindustrial"){
         if(form["actividad"][1].checked==true)
         if(form["actividad5"][0].checked==true)c.value++; 
         if(form["actividad5"][1].checked==true)c.value++;
         if(form["actividad4"][0].checked==true)c.value++;
         if(form["actividad5"][0].checked==true)c.value++;
         if(form["actividad6"][0].checked==true)c.value++;
        }
        if(c.nombre==="Medicina"){
         if(form["actividad"][3].checked==true)c.value++; 
         if(form["actividad2"][1].checked==true)c.value++;
         if(form["actividad3"][1].checked==true )c.value++;
        }
        if(c.nombre==="Psicologia"){
         if(form["actividad"][3].checked==true)c.value++;
         if(form["actividad3"][3].checked==true)c.value++;
         if(form["actividad4"][3].checked==true)c.value++;
         if(form["actividad4"][3].checked==true)c.value++;
         if(form["actividad5"][3].checked==true)c.value++;
         if(form["actividad6"][3].checked==true)c.value++;
        }
        if(c.nombre==="Veterinaria"){
         if(form["actividad3"][1].checked==true)c.value++;
         if(form["actividad4"][1].checked==true)c.value++;
         if(form["actividad5"][1].checked==true)c.value++;
         if(form["actividad6"][1].checked==true)c.value++;
        
        }
    })

    const mejorcarrera=carreras.reduce((max,carrera)=>carrera.value>max.value?carrera:max)

    console.log(carreras)
      console.log(mejorcarrera)
    
   
localStorage.setItem("carrera",mejorcarrera.nombre);
location.href="Resultado.html"   
// }
// function mostrarEncuesta(){
// let resultados=localStorage.getItem("Carrera1")
// document.getElementById("resultado").innerText=resultados

}
    
function cargarresultado(){
    const carrera=localStorage.getItem("carrera")

    const links={
        "Arquitectura":"Carrera.html",
        "Administracion":"administracion.html",
        "Comunicacion":"Comunicacion social.html",
        "Derecho":"Derecho.html",
        "Diseño":"Diseño.html",
        "Economia":"Economia.html",
        "Ingenieriasistemas":"Ingenieria en Sistemas.html",
        "Ingenieriaindustrial":"Ingenieria Industrial.html",
        "Medicina":"Medicina.html",
        "Psicologia":"Psicologia.html",
        "Veterinaria":"Veterinaria.html"
    }
    document.getElementById("resultado").innerHTML=`<a href="${links[carrera]}">${carrera}</a>`;
}