// const http=require('http')
import * as http from "http"

const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(202,{'content-type':'text/plain'})
        res.end("Welcome Home page")
    }
    else if(req.url==='/about'){
        res.writeHead(202,{'content-type':'text/plain'})
        res.end("Welcome to about page")
    }
    else if(req.url=='/contact'){
        res.writeHead(202,{'content-type':'text/plain'})
        res.end('Contact us contact123@getMaxListeners.com')
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end("Page not Found")
    }
})

const port:number=6000
server.listen(port,()=>{
    console.log(`server liserning on port ${port}`)
})
