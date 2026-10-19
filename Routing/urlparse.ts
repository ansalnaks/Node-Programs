
import * as http from 'http'
import * as url from 'url'
import * as fs from 'fs'

const server = http.createServer((req,res)=>{
    const urlparse = url.parse(req.url||"",true)
    console.log('url',urlparse);

    if(urlparse.pathname === '/greet' && urlparse.query.name){
        const name = urlparse.query.name as string
        console.log('path',urlparse.pathname)
        console.log('name',name)

        fs.readFile('greetings.html','utf8',(err,data)=>{
            if(err){
                res.writeHead(500, {'content-type':'text/plain'})
                res.end("Server Error")
                return
            }
            const dynamichtml = data.replace('{{name}}',name)
            res.writeHead(200,{'content-type':'text/html'})
            res.end(dynamichtml)
        })
    }

    else {
        res.writeHead(500, {'content-type':'text/html'})
        res.end("Welcome!please provide a name in the url eg:/greet?name=varsha")
    }
})

const port =7000
server.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})


