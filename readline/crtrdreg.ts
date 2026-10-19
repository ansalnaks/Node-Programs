import * as readline from "node:readline"

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function handleregister(){
    rl.question("Enter name:",(name:string)=>{
        rl.question("Enter email:",(email:string)=>{
            console.log(`${name} your email ${email} is successfully registered.`)
            rl.close()
        })
    })
}

handleregister()
