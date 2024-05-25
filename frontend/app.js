const http = require('http')
const { readFileSync } = require('fs')

const server = http.createServer((req, res) => {
    if(req.url === "/style.css"){
        const style = readFileSync("./page/style.css")
        res.write(style)
        res.end()
    }else if(req.url === "/script.js"){
        const script = readFileSync("./page/script.js")
        res.write(script)
        res.end()
    }
    else{
        const indexPage = readFileSync("./page/index.html")
        res.write(indexPage)
        res.end()
    }
});

server.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000');
});
