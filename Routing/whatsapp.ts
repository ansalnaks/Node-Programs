import * as http from "http";

const server = http.createServer((req, res) => {
    
    if (req.method === "GET" && req.url === "/messages") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Displaying all WhatsApp messages");
    }

  
    else if (req.method === "GET" && req.url === "/chats") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Displaying all chats");
    }

    else if (req.method === "GET" && req.url === "/contacts") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Displaying all contacts");
    }

    
    else if (req.method === "POST" && req.url === "/messages") {
        res.writeHead(201, { "Content-Type": "text/plain" });
        res.end("Message sent successfully");
    }

   
    else if (req.method === "POST" && req.url === "/contacts") {
        res.writeHead(201, { "Content-Type": "text/plain" });
        res.end("New contact added successfully");
    }

   
    else if (req.method === "PUT" && req.url === "/messages") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Message updated successfully");
    }

   
    else if (req.method === "PATCH" && req.url === "/messages/status") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Message marked as read");
    }

   
    else if (req.method === "DELETE" && req.url === "/messages") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Message deleted successfully");
    }

   
    else if (req.method === "DELETE" && req.url === "/chats") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Chat deleted successfully");
    }

   
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Route Not Found");
    }

});

const port: number = 6000;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});