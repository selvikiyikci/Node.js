var http = require("http");
var fs = require("fs");

var server = http.createServer((request, response) => {

    if (request.url === "/") {
        fs.readFile("index.html", (error, html) =>{
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    });
}
    else if (request.url == "/blogs") {
        fs.readFile("blogs.html", (error, html) =>{
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    });
}

else if (request.url == "/create" && request.method == "POST") {
    fs.appendFile("blogs.txt","deneme", (err) =>{
        if(err){
            console.log(err);
        }
        else {
            response.statusCode = 302;
            response.setHeader("Location", "/");
            response.end();
        }
 
});
}

else if (request.url == "/create") {
    fs.readFile("create.html", (error, html) =>{
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
});
}

    else {
        fs.readFile("404.html", (error, html) =>{
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    });
}
});


server.listen(3000);

console.log("node.js server at port 3000");