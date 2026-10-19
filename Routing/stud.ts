import * as http from "http";

const server = http.createServer((req, res) => {

  
    if (req.method === "GET" && req.url === "/students") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Displaying all students");
    }

  
    else if (req.method === "POST" && req.url === "/students") {
        res.writeHead(201, { "Content-Type": "text/plain" });
        res.end("Student added successfully");
    }

    else if (req.method === "PUT" && req.url === "/students") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Student updated successfully");
    }

    
    else if (req.method === "DELETE" && req.url === "/students") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Student deleted successfully");
    }
    else if(req.method==="PATCH" && req.url==="/students/one"){
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Student partially updated successfully");
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Route Not Found");
    }

});

const port:number = 6000;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});