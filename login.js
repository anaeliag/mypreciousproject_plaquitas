document.body.onload = login()

console.log(login.usuario)
if (login.usuario === BD[0].usuario) {
    alert("usuario logueado");
}

const loginUsuario = login(nombre, contrasena, usuario);
console.log("Usuario logueado", loginUsuario);
if (loginUsuario.length > 0) {
    alert("usuario logueado");
    construyePerfil(loginUsuario[0])
} else {
        alert("usuario no encontrado")
}

