var http = require("http");

var server = http.createServer((request, response) => {

    if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(`<html>
            <head>
            <title> ana sayfa </title>
            <meta charset = "utf-8">
            </head>
            <body>
                <h1> Ana Sayfa </h1>
            </body>
            </html>`);
        response.end();
    }
    else if (request.url == "/blogs") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(`<html>
            <head>
            <title> Blogs </title>  
            <meta charset = "utf-8">
            </head>
            <body>
                <h1> Blog Listesi </h1>
            </body>
            </html>`);
        response.end();
    }
    else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write(`<html>
            <head>
            <title> 404 </title>
            <meta charset = "utf-8">
            </head>
            <body>
                <h1> Aradığınız kaynak bulunamadı. </h1>
            </body>
            </html>`);
        response.end();
    }
});





/*    console.log(request.url, request.method);
    console.log(response.statusCode); */
/*     response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;
    response.statusMessage = "OK";

    response.write("<h1>Main Page</h1>");
    response.write("<p1>Products</p1>");
 */




server.listen(3000);

console.log("node.js server at port 3000");