import * as readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter name: ", (name: string) => {
    console.log(`Hello ${name}`);
    rl.close();
});

rl.on("close", () => {
    console.log("Goodbye");
});