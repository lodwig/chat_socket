const io = require('socket.io')
const server = io.listen(5000)

server.on("connection", (socket) => {
    console.log("Client Connect : " + socket.id)
    socket.broadcast.emit("greeting", { msg: "Welcome, ", user: "user_" + socket.id });
    socket.emit("greeting", { msg: "Welcome, ", user: "user_" + socket.id });
    socket.on("msg", (data) => {
        console.log(data);
        socket.broadcast.emit("msg", data);
        socket.emit("msg", data);
    });
});
