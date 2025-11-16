//  VARIABLES GLOBALES
const libros = [
    {
        titulo: "Don Quijote",
        desc: "Novela escrita por Miguel de Cervantes Saavedra.",
        img: "images/libros/don-quijote.jpg"
    },
    {
        titulo: "HTML5",
        desc: "La versión más reciente del lenguaje de marcado web.",
        img: "images/libros/html5-css5.gif"
    },
    {
        titulo: "Java",
        desc: "Lenguaje de programación orientado a objetos.",
        img: "images/libros/java.jpeg"
    },
    {
        titulo: "Mago de Oz",
        desc: "Historia de Dorothy en el mágico país de Oz.",
        img: "images/libros/mago-de-oz.jpg"
    },
    {
        titulo: "Viaje al centro de la Tierra",
        desc: "Aventura de Julio Verne hacia el interior del planeta.",
        img: "images/libros/viaje-centro-tierra.jpg"
    }
];

let carrito = 0;

// DEFINICIÓN DE FUNCIONES
function cargarLibros() {
    const contenedor = document.getElementById("contenedor-libros");

    for (let i = 0; i < libros.length; i++) {
        
        let libroActual = libros[i];

        const cardHTML = 
            '<div class="libro-card">' +
                '<div class="card-img">' +
                    '<img src="' + libroActual.img + '" alt="' + libroActual.titulo + '" loading="lazy">' +
                '</div>' +
                '<div class="card-body">' +
                    '<h3>' + libroActual.titulo + '</h3>' +
                    '<p>' + libroActual.desc + '</p>' +
                    '<button class="btn" onclick="reservarLibro(\'' + libroActual.titulo + '\')">Reservar</button>' +
                '</div>' +
            '</div>';
        
        contenedor.innerHTML += cardHTML;
    }
}

function reservarLibro(titulo) {
    const confirmacion = confirm('¿Estás seguro que deseas reservar "' + titulo + '"?');

    if (confirmacion) {
        let email = prompt("Por favor, ingresa tu correo para enviarte la confirmación:");
        
        if (email && email.includes("@")) {
            alert('¡Éxito! Hemos reservado "' + titulo + '". Te contactaremos a: ' + email);
            carrito++;
            
            document.getElementById("contador-carrito").innerHTML = carrito;
           
            console.log("Libros reservados: " + carrito);
        } else {
            alert("Correo no válido o cancelado.");
        }
    } else {
        alert("Operación cancelada.");
    }
}

function abrirModal() {
    const modal = document.getElementById("miModal");
    modal.style.display = "block";
}

function cerrarModal() {
    const modal = document.getElementById("miModal");
    modal.style.display = "none";
}

function abrirLoginModal() {
    const loginModal = document.getElementById("loginModal");
    loginModal.style.display = "block";
}

function cerrarLoginModal() {
    const loginModal = document.getElementById("loginModal");
    loginModal.style.display = "none";
}

// EJECUCIÓN 
document.addEventListener('DOMContentLoaded', function() {
    
    cargarLibros();

    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    const subModal = document.getElementById("miModal");
    const loginModal = document.getElementById("loginModal"); 

    window.onclick = function(event) {
        if (event.target == subModal) {
            subModal.style.display = "none";
        }
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    }

    const loginForm = document.getElementById("loginForm");
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        alert("¡Bienvenido! login exitoso)");
        
        cerrarLoginModal(); 
    });

});