function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        document.getElementById("result").textContent = "ingresa una fecha válida.";
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById("result").textContent = `Tu edad es ${age} años.`;
}