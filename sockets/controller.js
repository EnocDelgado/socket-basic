


const socketCotroller = ( socket ) => {

    console.log('Client connected', socket.id )
    // Disconnect when reload webpage
    socket.on('disconnect', () => {
        console.log('Clinet disconnected', socket.id );
    })

    // Send information to server
    socket.on( 'send-message', ( payload, callback ) => {

        const id = 123456;
        callback( id );

        // send an event to all connected clients
        socket.broadcast.emit('message', payload );
    })
}


module.exports = {
    socketCotroller
}