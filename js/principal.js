var imageContainers = document.querySelectorAll(".imagesHallo")
var modalTitle = document.getElementById("modalTitle")
var modalImage = document.getElementById("modalImage")
var modalSummary = document.getElementById("modalSummary")
var modal = document.getElementById("myModal")
var closeModal = document.getElementById("closeModal")
var imagenesHalloween = [
    {
      nombre: "Fantasma en la Luna",
      resumen: "Un espeluznante fantasma flotando frente a una luna llena.",
    },
    {
      nombre: "Bruja Volando en Escoba",
      resumen: "Una bruja con sombrero puntiagudo volando en su escoba mágica.",
    },
    {
      nombre: "Calabazas Talladas",
      resumen: "Calabazas con caras espeluznantes talladas e iluminadas con velas.",
    },
    {
      nombre: "Cementerio Nocturno",
      resumen: "Un cementerio oscuro con tumbas y árboles retorcidos bajo la luz de la luna.",
    },
    {
      nombre: "Arácnidos Peludos",
      resumen: "Arañas peludas con ojos brillantes tejiendo sus redes en la oscuridad.",
    },
    {
      nombre: "Zombis Hambrientos",
      resumen: "Zombis con aspecto hambriento merodeando por la noche en busca de cerebros.",
    },
    {
      nombre: "Espantapájaros Siniestro",
      resumen: "Un espantapájaros siniestro en un campo de maíz abandonado.",
    },
    {
      nombre: "Mansión Encantada",
      resumen: "Una mansión encantada con ventanas iluminadas por velas temblorosas.",
    },
    {
      nombre: "Gatos Negros Mágicos",
      resumen: "Gatos negros con ojos brillantes y collares mágicos acechando en la noche.",
    },
    {
      nombre: "Candies de Halloween",
      resumen: "Dulces y caramelos de Halloween en forma de calabazas y fantasmas.",
    },
  ];
  
Array.from(imageContainers).forEach(function (container, index) {
    var image = container.querySelector(".modal-image");
    var infoMessage = container.querySelector(".info-message");

    // Muestra el mensaje de más información al hacer hover
    image.addEventListener("mouseover", function() {
        infoMessage.style.display = "block";
    });

    // Oculta el mensaje de más información al quitar el hover
    image.addEventListener("mouseout", function() {
        infoMessage.style.display = "none";
    });

    // Agrega un evento clic para mostrar el modal y cambia el título y resumen
    image.addEventListener("click", function(event) {
        modal.style.display = "block";
        modalTitle.textContent = imagenesHalloween[index].nombre; // Cambia el título
        modalImage.src = event.target.src;
        modalSummary.textContent = imagenesHalloween[index].resumen; // Cambia el resumen
    });
});

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var icons = document.querySelector('.icons');

icons.addEventListener('mouseover', function(e) {
  // console.log(e.target.tagName)
  if (e.target.tagName === 'A') {
    e.target.querySelector('i').classList.add('fa-beat-fade');
    console.log(e.target.tagName === 'A')
  }
})

icons.addEventListener('mouseout', function(e) {
  if (e.target.tagName === 'A') {
    e.target.querySelector('i').classList.remove('fa-beat-fade')
  }
})

function closeModal2() {
  document.getElementById('overlay').style.display = 'none'
  document.getElementById('modal2').style.display = 'none'
}

document.querySelector('.closeButton').addEventListener("click",closeModal2)

function buyTicket(title,price){
  // console.log('el titulo 2' + title)
  document.getElementById('modalTitle2').innerHTML = title
  document.getElementById('modalPrice').innerHTML = `Precio: ${price}`
  document.getElementById('overlay').style.display = 'block'
  document.getElementById('modal2').style.display = 'block'
  // document.getElementById('saveButton').removeAttribute('disabled');

}

var buttonReserve = document.querySelector('.safeStorage')

buttonReserve.addEventListener("click", function safeToLocalStorage(){
  var title = document.getElementById('modalTitle2').innerHTML
  var price = document.getElementById('modalPrice').innerHTML
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var quantity = document.getElementById('quantity').value
  localStorage.setItem('ticketInfo', JSON.stringify({title,price,name,email,quantity}))
  
  
  window.location.href = 'reserva.html';
})



document.querySelectorAll('.buyTicket').forEach(function(element) {
  element.addEventListener('click', function() {
      var title = this.closest('.card').querySelector('.title h3').innerText
      var price = this.closest('.card').querySelector('.price p').innerText
      // console.log('el titulo 1' + title)
      buyTicket(title, price);
  })
})

document.getElementById('name').addEventListener('input',toggleSaveButtonState)
document.getElementById('email').addEventListener('input',toggleSaveButtonState)
document.getElementById('quantity').addEventListener('input',toggleSaveButtonState)

function toggleSaveButtonState() {
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var quantity = document.getElementById('quantity').value
  var saveButton = document.getElementById('saveButton')
  
  // Si los 3 campos tienen contenido, habilita el botón, de lo contrario, deshabilítalo
  saveButton.disabled = !(name && email && quantity)
}