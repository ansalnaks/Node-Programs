import * as http from "node:http";

const port: number = 6000;

const server = http.createServer((req, res) => {

    if (req.url === "/posts") {
        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify([
            {
                id: 1,
                username: "anu",
                caption: "Enjoying my vacation 🌴",
                likes: 120
            },
            {
                id: 2,
                username: "rahul",
                caption: "Node.js is awesome 🚀",
                likes: 95
            }
        ]));
    }

    else if (req.url === "/posts/1") {
        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify({
            id: 1,
            username: "anu",
            caption: "Enjoying my vacation 🌴",
            likes: 120
        }));
    }

    else if (req.url === "/users") {
        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify([
            {
                id: 1,
                username: "anu",
                followers: 1500,
                following: 300
            },
            {
                id: 2,
                username: "rahul",
                followers: 950,
                following: 180
            }
        ]));
    }

    else if (req.url === "/profile") {
        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify({
            username: "anu",
            bio: "MERN Stack Developer",
            posts: 25,
            followers: 1500,
            following: 300
        }));
    }

    else if (req.url === "/reels") {
        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify([
            {
                id: 1,
                title: "Travel Reel",
                views: 25000
            },
            {
                id: 2,
                title: "Coding Tips",
                views: 18000
            }
        ]));
    }

    else if (req.url === "/notifications") {
        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify([
            "Rahul liked your post ❤️",
            "Anu started following you",
            "Ajay commented on your photo"
        ]));
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }

});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});