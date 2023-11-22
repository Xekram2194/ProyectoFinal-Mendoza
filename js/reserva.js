 // Recupera la información del local storage y la muestra
 var ticketInfo = JSON.parse(localStorage.getItem('ticketInfo'));
//  var zzzz = ticketInfo.price
//  var numero = Number(zzzz.replace("$", ""))
// console.log(zzzz)
// console.log(numero)
 if (ticketInfo) {
    document.getElementById('reserveTable2').innerHTML = `
            <tr>
            <th colspan="2">${ticketInfo.title}</th>
        </tr>
        <tr>
            <td>Nombre</td>
            <td>${ticketInfo.name}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>${ticketInfo.email}</td>
        </tr>
        <tr>
            <td>Precio</td>
            <td>${ticketInfo.price}</td>
        </tr>
        <tr>
            <td>Cantidad</td>
            <td>${ticketInfo.quantity}</td>
        </tr>
        <tr>
            <td>Total a pagar</td>
            <td>$ ${ticketInfo.quantity * Number(ticketInfo.price.replace("$", ""))}</td>
        </tr>
    `;
} else {
    document.getElementById('reserveTable2').innerHTML = '<p>No hay información de reserva.</p>';
}

  