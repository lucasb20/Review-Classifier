const http = require('http')
const { readFileSync } = require('fs')

const server = http.createServer((req, res) => {
    const indexPage = readFileSync("./page/index.html")
    res.write(indexPage)
    res.end()
});

server.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000');
});
