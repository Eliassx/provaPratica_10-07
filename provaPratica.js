const os = require('os');
const fs = require('fs');
const url = require('url');
const path = require('path');
const http = require('http');
const PORT = 5000;

//* Atividade 01

/*
const server = http.createServer((req, res) => {
    if(req === '/info') {
        const data = {
            memoria: os.totalmem(),
            sistema: os.type(),
            diretorio: os.homedir()
        };
        const json = JSON.stringify(data);

        res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});
        res.write(`<p>${json}</p>`);
        return res.end();
    }
    else {
        res.writeHead(404, {'Content-Type' : 'text/plan; charset=UTF-8'})
        res.write('Página não encontrada')
        return res.end()
    }
});

server.listen(PORT, () => {
    console.log(`Servidor ON! 👻`)
});
*/

//* Atividade 02
/*

const address = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf';
const data = path.parse(address);

console.log(data);

*/
//* Atividade 03
/*
const createUrl = {
    protocol: 'https:',
    hostname: 'nodejs.org',
    pathname: '/api/url.html',
    hash: '#url_new_url_input_base'
}
const newUrl = url.format(createUrl);

console.log(url.parse(newUrl));
*/

//* Atividade 04
/*
fs.writeFile('arquivo.txt','utf-8', function(err, data){
    if(err){
        console.error(err)
        return
    }
    else {
        console.log('Arquivo criado!')
    }
});

fs.rename('arquivo.txt', 'arquivo1.txt', function(err, data){
    if(err){
        console.error(err)
        return
    }
    else {
        console.log('Arquivo renomeado!')
    }
})
*/

//* Atividade 05
// console.log(os.cpus());