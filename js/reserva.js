 // Recupera la información del local storage y la muestra
 var ticketInfo = JSON.parse(localStorage.getItem('ticketInfo'));

 if (ticketInfo) {
     document.write(`<p>Título: ${ticketInfo.title}</p>`);
     document.write(`<p>Precio: ${ticketInfo.price}</p>`);
     document.write(`<p>Nombre: ${ticketInfo.name}</p>`);
     document.write(`<p>Email: ${ticketInfo.email}</p>`);
     document.write(`<p>Cantidad: ${ticketInfo.quantity}</p>`);
 } else {
     document.write('<p>No hay información de reserva.</p>');
 }