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