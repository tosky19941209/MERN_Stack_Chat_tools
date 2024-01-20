module.exports = () => {

    const express = require("express")
    const cors = require("cors")
    const config = require("./env/config")
    const router = require("../router/router")

    const app = express()
    
    app.use(cors({
        methods : ["GET","POST","PUT","DELETE"],
        origin : '*'
    }))
    app.use(express.json()); 
    app.use("/api/",router)

    const server = require("http").Server(app)
    server.listen(config.port,()=>{
        console.log(`server is running at ${config.port}`)
    })
    
}

