import {io} from 'socket.io-client'

let socket = null

export const connectWithSocketServer = () => {
    socket = io('http://localhost:5000',{
        transports: ['websocket']
    })
    socket.on("connect",() => {
        console.log("successfully connected with socke.io")
        console.log(socket.id)
    })
    socket.on("connect_error", (error) => {
        console.error("Socket.IO connection error:", error);
    });
}