

// HTML References
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

// Conect with socket
const socket = io();


socket.on('connect', () => {
    // console.log('Connect');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    // console.log('Disconnect from the server');

    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

// Recieve information from the server
socket.on( 'message', ( payload ) => {
    console.log( payload );
})


btnSend.addEventListener( 'click', () => {

    
    const message = txtMessage.value;
    const payload = {
        message,
        id: "A2S354D6F7YB",
        date: new Date().getTime()
    }
    // Send information to server
    socket.emit( 'send-message', payload, ( id ) => {
        console.log('From server', id)
    } );
})