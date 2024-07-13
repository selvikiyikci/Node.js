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