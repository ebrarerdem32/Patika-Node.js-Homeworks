// Call the http module for make our server
const http = require("http");

const server = http.createServer((req, res) => {

    const url = req.url;
//Goes to which url is
    if (url === "/") {
        res.writeHead(200, {'Content-Type':'text/html'} );
        res.write("<h2>Anasayfaya Hoşgeldiniz</h2>")


    } 
    else if (url === "/hakkimda") {
        res.writeHead(200, {'Content-Type':'text/html'} );
        res.write("<h2>Hakkımda Sayfasına Hoşgeldiniz </h2>")


    } 
    else if (url === "/iletisim") {
        res.writeHead(200, {'Content-Type':'text/html'} );
        res.write("<h2>İletişim Sayfasına Hoşgeldiniz</h2>")


    } 
    else {
        res.writeHead(404, {'Content-Type':'text/html'} );
        res.write("<h1>Sayfa bulunamadı</h1>")

        
    }

    res.end();
});
//Port number
const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu ${port} portunda başladı.`)
})