let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para guardar en LocalStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para agregar productos al carrito
function agregarAlCarrito(nombre) {
    const productoExistente = carrito.find(item => item.nombre === nombre);
    
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ nombre, cantidad: 1 });
    }
    
    guardarCarrito(); // Guarda cambios en LocalStorage
    actualizarCarrito();
}

// Función para eliminar un producto
function eliminarDelCarrito(nombre) {
    carrito = carrito.filter(item => item.nombre !== nombre);
    guardarCarrito();
    actualizarCarrito();
}

// Función para modificar la cantidad
function modificarCantidad(nombre, nuevaCantidad) {
    const producto = carrito.find(item => item.nombre === nombre);
    if (producto) {
        producto.cantidad = nuevaCantidad > 0 ? nuevaCantidad : 1;
    }

    guardarCarrito();
    actualizarCarrito();
}

// Función para actualizar el carrito en la interfaz
function actualizarCarrito() {
    const carritoContainer = document.getElementById("carrito");
    carritoContainer.innerHTML = "";

    if (carrito.length === 0) {
        carritoContainer.innerHTML = "<p>El carrito está vacío</p>";
        return;
    }

    carrito.forEach(item => {
        carritoContainer.innerHTML += `
            <div class="d-flex justify-content-between align-items-center p-2 border">
                <span>${item.nombre} - Cantidad: ${item.cantidad}</span>
                <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito('${item.nombre}')">Eliminar</button>
                <input type="number" min="1" class="form-control form-control-sm w-25" value="${item.cantidad}" onchange="modificarCantidad('${item.nombre}', this.value)">
            </div>
        `;
    });

    const finalizarCompraBtn = document.getElementById("finalizarCompra");
    finalizarCompraBtn.classList.toggle("d-none", carrito.length === 0);
}

// **Cargar carrito al iniciar**
// Cargar carrito al iniciar automáticamente
document.addEventListener("DOMContentLoaded", actualizarCarrito);