const nombre = document.getElementById("name");
const email = document.getElementById("email");
const edad = document.getElementById("edad");
const password = document.getElementById("password");
const hashedPassword = document.getElementById("hashedPassword");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");


async function encriptarContraseña(texto) {
    const encoder = new TextEncoder();
    const data = encoder.encode(texto);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hash))
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
}

form.addEventListener("submit", async e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML = "";

    if (nombre.value.length < 2) {
        warnings += `El nombre no es válido <br>`;
        entrar = true;
    }
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es válido <br>`;
        entrar = true;
    }
    if (edad.value.length <= 1 || edad.value.length > 2) {
        warnings += `La edad no es válida <br>`;
        entrar = true;
    }
    if (password.value.length < 6) {
        warnings += `La contraseña debe tener al menos 6 caracteres <br>`;
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warnings;
    } else {
        const hash = await encriptarContraseña(password.value);
        hashedPassword.innerHTML = `🔐 ${hash}`; 
        parrafo.innerHTML = "Registrado 🍪";
        alert("Registrado, Se le notificara por correo electronico sobre sus pedidos y nuevas actualizaciones que hayan")
    }
});