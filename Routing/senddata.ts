import * as http from "http";

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/messages") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            // Check if body is empty
            if (!body) {
                res.writeHead(400, {
                    "Content-Type": "application/json"
                });
                res.end(JSON.stringify({
                    success: false,
                    message: "Request body is empty"
                }));
                return;
            }
            try {
                // Convert JSON string to JavaScript object
                const message = JSON.parse(body);
                res.writeHead(201, {
                    "Content-Type": "application/json"
                });
                res.end(JSON.stringify({
                    success: true,
                    message: "Message Sent Successfully",
                    data: message
                }));
            } catch (error) {
                res.writeHead(400, {
                    "Content-Type": "application/json"
                });
                res.end(JSON.stringify({
                    success: false,
                    message: "Invalid JSON Format"
                }));
            }
        });
    }


    

    else if (req.method === "GET" && req.url === "/messages") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify({
            message: "Displaying all messages",
        }));
    }

    else {
        res.writeHead(404, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify({
            message: "Route Not Found"
        }));
    }
});





const port: number = 6000;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});