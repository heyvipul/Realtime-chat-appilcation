const express = require("express")
const { Server } = require("socket.io");
const { createServer } = require("http");
const router = require("./routers/router")
const cors = require("cors")

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors()); 
// const server = http.createServer(app)
// const io = socketio(server)
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
});
  

io.on("connection",(socket)=>{
    console.log("we have a new connection");
    
    socket.on("disconnect",()=>{
        console.log("user had left!");
    })
})

app.use(router);

httpServer.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})

