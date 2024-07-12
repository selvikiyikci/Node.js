var http = require("http");
function myfunction(request, response) {
    console.log(request);
    response.writeHeader(200, { "Context-Type": "text-plain" });
    var degisken= "<html><body><h1>";
    for(a=1;a<10;a++){
        degisken += a+ ". Bilgisayar Kavramları<br>";
    }
    degisken +="</h1></body></html>";

    response.write(degisken);
    response.end();

}

http.createServer(myfunction).listen(8000);
console.log("sunucu çalışıyor");
//8000. portta node.js'in http modülünü dinliyor.