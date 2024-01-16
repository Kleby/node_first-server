const http = require("http");
const fs = require("fs");
const path = require('path');
const sysInf = require('./SysInf');
const port = process.env.PORT || 3000
 
const pageHome = path.join(__dirname, 'home.html');
fs.readFile(pageHome, (err, html) => {
    if(err) return console.error('Error: ', err)

    http.createServer((req, res) => {
        if(req.url === '/'){
            res.writeHead(200, {'Content-Type': 'text/html'}) 
            res.write(html);
            res.end()
        }
        else if(req.url === '/system'){
            res.write(JSON.stringify(sysInf, null, 2));
            console.log(sysInf)
            res.end();
        }
    }
    ).listen(port, console.log(`Servidor Rodando na porta ${port}`));

})
