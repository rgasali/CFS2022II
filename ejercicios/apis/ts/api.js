var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
//variables para aplicacion de clima
var inputCiudad = document.getElementById("inputCiudad");
var botonBuscar = document.getElementById("botonBuscar");
var spanCiudad = document.getElementById("ciudad");
var spanTemperatura = document.getElementById("temperatura");
var spanTempMin = document.getElementById("tempMin");
var spanTempMax = document.getElementById("tempMax");
var spanTermica = document.getElementById("termica");
var spanHumedad = document.getElementById("humedad");
var spanPresion = document.getElementById("presion");
var spanVelocidadViento = document.getElementById("velocidadViento");
var spanDireccionViento = document.getElementById("direccionViento");
var spanNubosidad = document.getElementById("nubosidad");
var ciudad = "";
//variables para aplicacion de libros
var inputLibro = document.getElementById("inputLibro");
var botonBuscarLibro = document.getElementById("botonBuscarLibro");
var spanNombreLibro = document.getElementById("nombreLibro");
var spanImagenLibro = document.getElementById("imagenLibro");
var spanEscritor = document.getElementById("escritor");
var spanGenero = document.getElementById("genero");
var spanPublicacion = document.getElementById("publicacion");
var imagenLibro = document.getElementById("imagenLibro");
var libro = "";
//************* aplicacion para libros***************
botonBuscarLibro.addEventListener("click", function () {
    libro = inputLibro.value;
    libro.replace("", "+");
    //console.log(libro);
    spanNombreLibro.innerHTML = "";
    spanGenero.innerHTML = "";
    spanEscritor.innerHTML = "";
    spanPublicacion.innerHTML = "";
    cargarLibro();
});
var cargarLibro = function () { return __awaiter(_this, void 0, void 0, function () {
    var respuestaLibro, datosLibro, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, fetch("http://openlibrary.org/search.json?title=".concat(libro))
                    //console.log(respuestaLibro);
                ];
            case 1:
                respuestaLibro = _a.sent();
                if (!(respuestaLibro.status === 200)) return [3 /*break*/, 3];
                return [4 /*yield*/, respuestaLibro.json()];
            case 2:
                datosLibro = _a.sent();
                //console.log(datosLibro);
                //console.log(datosLibro.docs);
                //console.log(datosLibro.docs[0].title);
                //console.log(datosLibro.docs[0].author_name[0]);
                //console.log(datosLibro.docs[0].first_publish_year);
                //console.log(datosLibro.docs[20].subject[0]);
                //console.log(datosLibro.docs[0].cover_i)
                //console.log(`https://covers.openlibrary.org/b/id/${datosLibro.docs[0].cover_i}-M.jpg`);
                if (!datosLibro.docs[0].title) {
                    spanNombreLibro.innerHTML = "lo sentimos. no pudimos encontrar ese libro";
                }
                else {
                    spanNombreLibro.innerHTML = datosLibro.docs[0].title;
                    if (!datosLibro.docs[0].cover_i) {
                        imagenLibro.src = "https://img.freepik.com/fotos-premium/libros-antiguos-estante_94676-559.jpg?w=740";
                    }
                    else {
                        imagenLibro.src = "https://covers.openlibrary.org/b/id/".concat(datosLibro.docs[0].cover_i, "-M.jpg");
                        if (datosLibro.docs[0].subject[0] === undefined) {
                            spanGenero.innerHTML = "no pudimos especificar el genero";
                        }
                        else {
                            spanGenero.innerHTML = datosLibro.docs[0].subject[0];
                            spanEscritor.innerHTML = datosLibro.docs[0].author_name[0];
                            spanPublicacion.innerHTML = datosLibro.docs[0].first_publish_year;
                        }
                    }
                }
                _a.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
//*************  aplicacion para clima ****************
botonBuscar.addEventListener("click", function () {
    ciudad = inputCiudad.value;
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
    setTimeout(function () {
        spanCiudad.classList.remove("climaSpan");
        spanTemperatura.classList.remove("climaSpan");
        spanTempMin.classList.remove("climaSpan");
        spanTempMax.classList.remove("climaSpan");
        spanTermica.classList.remove("climaSpan");
        spanHumedad.classList.remove("climaSpan");
        spanPresion.classList.remove("climaSpan");
        spanVelocidadViento.classList.remove("climaSpan");
        spanDireccionViento.classList.remove("climaSpan");
        spanNubosidad.classList.remove("climaSpan");
    }, 5000);
});
var cargarClima = function () { return __awaiter(_this, void 0, void 0, function () {
    var respuesta, datos, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(ciudad, "&lang=es&appid=5455794276613210aab0292f4c59e1f6&units=metric"))];
            case 1:
                respuesta = _a.sent();
                console.log(respuesta);
                if (!(respuesta.status === 200)) return [3 /*break*/, 3];
                return [4 /*yield*/, respuesta.json()];
            case 2:
                datos = _a.sent();
                spanCiudad.innerHTML = ciudad;
                spanTemperatura.innerHTML = datos.main.temp + "°C";
                spanTempMin.innerHTML = datos.main.temp_min + "°C";
                spanTempMax.innerHTML = datos.main.temp_max + "°C";
                spanTermica.innerHTML = datos.main.feels_like + "°C";
                spanHumedad.innerHTML = datos.main.humidity + " %";
                spanPresion.innerHTML = datos.main.pressure;
                spanVelocidadViento.innerHTML = datos.wind.speed + " KM/H";
                spanDireccionViento.innerHTML = datos.wind.deg + " °";
                spanNubosidad.innerHTML = datos.clouds.all + " %";
                _a.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
