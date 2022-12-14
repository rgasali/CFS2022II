//variables para aplicacion de clima
let inputCiudad=<HTMLInputElement> document.getElementById("inputCiudad");
let botonBuscar=<HTMLButtonElement>document.getElementById("botonBuscar");
let spanCiudad=<HTMLSpanElement>document.getElementById("ciudad");
let spanTemperatura=<HTMLSpanElement>document.getElementById("temperatura");
let spanTempMin =<HTMLSpanElement>document.getElementById("tempMin");
let spanTempMax =<HTMLSpanElement>document.getElementById("tempMax");
let spanTermica =<HTMLSpanElement>document.getElementById("termica");
let spanHumedad =<HTMLSpanElement>document.getElementById("humedad");
let spanPresion =<HTMLSpanElement>document.getElementById("presion");
let spanVelocidadViento =<HTMLSpanElement>document.getElementById("velocidadViento");
let spanDireccionViento =<HTMLSpanElement>document.getElementById("direccionViento");
let spanNubosidad =<HTMLSpanElement>document.getElementById("nubosidad");
let ciudad:string = "";
//variables para aplicacion de libros
let inputLibro=<HTMLInputElement> document.getElementById("inputLibro");
let botonBuscarLibro=<HTMLButtonElement> document.getElementById("botonBuscarLibro");
let spanNombreLibro=<HTMLSpanElement> document.getElementById("nombreLibro");
let spanImagenLibro=<HTMLSpanElement> document.getElementById("imagenLibro");
let spanEscritor=<HTMLSpanElement> document.getElementById("escritor");
let spanGenero=<HTMLSpanElement> document.getElementById("genero");
let spanPublicacion=<HTMLSpanElement> document.getElementById("publicacion");
let imagenLibro=<HTMLImageElement>document.getElementById("imagenLibro");
let libro:string = "";




//************* aplicacion para libros***************

botonBuscarLibro.addEventListener("click", ()=>{
    libro= inputLibro.value;
    libro.replace("","+");
    //console.log(libro);
    spanNombreLibro.innerHTML ="";
    spanGenero.innerHTML="";
    spanEscritor.innerHTML="";
    spanPublicacion.innerHTML=""

    cargarLibro();
})



const cargarLibro = async()=>{
    try{
        const respuestaLibro = await fetch (`http://openlibrary.org/search.json?title=${libro}`)
        //console.log(respuestaLibro);
        if(respuestaLibro.status===200){
                    
            const datosLibro=await respuestaLibro.json();

            //console.log(datosLibro);
            //console.log(datosLibro.docs);
            //console.log(datosLibro.docs[0].title);
            //console.log(datosLibro.docs[0].author_name[0]);
            //console.log(datosLibro.docs[0].first_publish_year);
            //console.log(datosLibro.docs[20].subject[0]);
            //console.log(datosLibro.docs[0].cover_i)
            //console.log(`https://covers.openlibrary.org/b/id/${datosLibro.docs[0].cover_i}-M.jpg`);
        
            if(!datosLibro.docs[0].title){
            spanNombreLibro.innerHTML = "lo sentimos. no pudimos encontrar ese libro";
                }
                else{
                 spanNombreLibro.innerHTML = datosLibro.docs[0].title;
                 if(!datosLibro.docs[0].cover_i){ 
                     imagenLibro.src= `https://img.freepik.com/fotos-premium/libros-antiguos-estante_94676-559.jpg?w=740`;
                     }
                     else{imagenLibro.src= `https://covers.openlibrary.org/b/id/${datosLibro.docs[0].cover_i}-M.jpg`;
                
                     if(datosLibro.docs[0].subject[0]===undefined){
                         spanGenero.innerHTML="no pudimos especificar el genero"  
                     }
                     else{
                         spanGenero.innerHTML= datosLibro.docs[0].subject[0];
                     
                         spanEscritor.innerHTML= datosLibro.docs[0].author_name[0];

                         spanPublicacion.innerHTML=  datosLibro.docs[0].first_publish_year
                        }
                    }
            }
            
            
       
       
            
        }
    }
    catch(error){
        console.log(error);
    }
}



//*************  aplicacion para clima ****************

botonBuscar.addEventListener("click",()=>{
    
    ciudad=inputCiudad.value;
    cargarClima();
    
    spanCiudad.classList.add("climaSpan");
    spanTemperatura.classList.add("climaSpan");
    spanTempMin.classList.add("climaSpan");
    spanTempMax.classList.add("climaSpan");
    spanTermica.classList.add("climaSpan");
    spanHumedad.classList.add("climaSpan");
    spanPresion.classList.add("climaSpan");
    spanVelocidadViento.classList.add("climaSpan");
    spanDireccionViento.classList.add("climaSpan");
    spanNubosidad.classList.add("climaSpan");
    setTimeout(() => {
        spanCiudad.classList.remove("climaSpan") 
        spanTemperatura.classList.remove("climaSpan")
        spanTempMin.classList.remove("climaSpan")
        spanTempMax.classList.remove("climaSpan")
        spanTermica.classList.remove("climaSpan")
        spanHumedad.classList.remove("climaSpan")
        spanPresion.classList.remove("climaSpan")
        spanVelocidadViento.classList.remove("climaSpan")
        spanDireccionViento.classList.remove("climaSpan")
        spanNubosidad.classList.remove("climaSpan")
    }, 5000 ) ;
})

const cargarClima = async()=>{
    try{
        const respuesta = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&appid=5455794276613210aab0292f4c59e1f6&units=metric`);
        console.log(respuesta)
        //si la respuesta es correcta
        if(respuesta.status===200){
            
            const datos= await respuesta.json();
            
            spanCiudad.innerHTML=ciudad;
            spanTemperatura.innerHTML=datos.main.temp + "°C";
            spanTempMin.innerHTML= datos.main.temp_min + "°C";
            spanTempMax.innerHTML= datos.main.temp_max + "°C";
            spanTermica.innerHTML= datos.main.feels_like + "°C";
            spanHumedad.innerHTML= datos.main.humidity + " %";
            spanPresion.innerHTML= datos.main.pressure;
            spanVelocidadViento.innerHTML= datos.wind.speed + " KM/H";
            spanDireccionViento.innerHTML= datos.wind.deg + " °";
            spanNubosidad.innerHTML= datos.clouds.all + " %";
            
        }
    }
    catch(error){
        console.log(error);
    }
}
