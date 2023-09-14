const BD = [
    {
        usuario: "user1",
        contrasena: "user2",
        nombre: "Usuario 1",
        productos: []
    },
    {
        usuario: "user2",
        contrasena: "user2",
        nombre: "Usuario 2",
        productos: []
    },
    {
        usuario: "user3",
        contrasena: "user3",
        nombre: "Usuario 3",
        productos: []
    },
    {
        usuario: "user4",
        contrasena: "user2",
        nombre: "Usuario 4",
        productos: []
    }
]


function login() {
    let registradoono = prompt("Ya tienes cuenta con nosotros? (Responde si o no)");
    if (registradoono === "si") {
        const usuario = prompt("cual es tu usuario? ");
        const contrasena = prompt("cual es tu contrasena? ");
        for (i=0;i<BD.length;i++){
            if (usuario === BD[i].usuario && contrasena === BD[i].contrasena){
                //construyePerfil()
                alert(document.getElementById("areaMensajes").innerText = "Bienvenido "+usuario+", estaremos contentos de servirte");
                console.log("Bienvenida/o "+usuario+", estaremos contentos de servirte");
                break
            } else if (Number(BD.length)-1 === i){
                console.log("usuario o contraseña incorrectas");
            }
        }
    } else {
        let quierescuenta = prompt("Quieres crear tu cuenta? (Responde si o no)");
        if (quierescuenta === "si") {
            const nombre = prompt("cual es tu nombre? ");
            const usuario = prompt("cual es tu usuario? ");
            const contrasena = prompt("cual es tu contrasena? ");
            console.log("Bienvenido "+usuario)
            const newUser = new Usuario(usuario, nombre, contrasena);
            const usermasnewuser = BD.concat(newUser);
            console.log(usermasnewuser)
        } else {
            alert("Puedes navegar sin tener cuenta, solo no podras comprar :(")
        }
    }
}

/*function construyePerfil(usuario) {
    const profile = document.createElement("h1");
    profile.textContent = `Bienvenido: ${usuario}`;
    console.log(document.getElementById("perfilUsuario"));
    document.getElementById("perfilUsuario").appendChild(profile);
  }*/

function validarnumeros (input_str) {
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        return re.test(input_str);
      }

function telefono(numerodetelefono) {
    const pattern = new RegExp("^\\[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{4}$");
    console.log(pattern)
    if (pattern.test(numerodetelefono)) {
        console.log("Numero de telefono es valido: "+numerodetelefono);
        //return true;
    } else {
        console.log("Numero invalido");
        compra()
    }
}

function compra(){
    let dimetuuser = prompt("Cual es tu usuario?");
    var plaquita="nulo";
    for (i=0;i<BD.length;i++){
        if (dimetuuser === BD[i].usuario){
            let mensajebienvenida = prompt("Bienvenida/o "+dimetuuser+", quieres elegir una plaquita?");
            if (mensajebienvenida === "si") {
                plaquita = prompt(`Que forma quieres que tenga tu plaquita (Elige el numero de la figura de la siguiente forma (ejemplo: 1, 2 3 etc)));
                1) Redonda
                2) Corazon
                3) Cuadrada
                4) Rectangular
                5) Forma de patita`);
                    if (Number(plaquita) == 1){
                        console.log("Elegiste la forma: "+plaquita+" - Redonda");
                    } else if (Number(plaquita) == 2) {
                        console.log("Elegiste la forma: "+plaquita+" - Corazon");
                    } else if (Number(plaquita) == 3) {
                        console.log("Elegiste la forma: "+plaquita+" - Cuadrada");
                    } else if (Number(plaquita) == 4) {
                        console.log("Elegiste la forma: "+plaquita+" - Rectangular");
                    } else if (Number(plaquita) == 5) {
                        console.log("Elegiste la forma: "+plaquita+" - Patita");
                    } else {
                        console.log("Esa opcion no es valida, por favor vuelve a loguearte");
                        login();
                    }
            } else {
                    console.log("Ok, puedes elegir mas productos");
                    login();
            }
            let nombredeperrito = prompt("Cual es en nombre de tu peludito?");
            console.log(typeof nombredeperrito)
            console.log(nombredeperrito)
            if (typeof nombredeperrito == 'string') {
                console.log("El nombre de tu peludito es: "+nombredeperrito);
            } else {
                console.log("Esa opcion no es valida, por favor vuelve a loguearte");                
            }
            let numerodetelefono = prompt("Cual es el numero de telefono que quieres agregar a la plaquita?(Ejemplo: 331-145-7698)");
            if (validarnumeros(numerodetelefono)) {
                console.log("Numero de telefono es valido: "+numerodetelefono);
                //return true;
            } else {
                console.log("Numero invalido");
                compra()
            }
        //}//??
            const colordeplaquita = prompt(`Que color de plaquita quieres elegir (ejemplo: 1, 2 3 etc)));
                1) Rosa
                2) verde
                3) Amarilla
                4) Azul
                5) Negro`);
                if (Number(colordeplaquita) == 1){
                    console.log("Elegiste el color: "+colordeplaquita+" - Rosa");
                } else if (Number(colordeplaquita) == 2) {
                    console.log("Elegiste el color: "+colordeplaquita+" - Verde");
                } else if (Number(colordeplaquita) == 3) {
                    console.log("Elegiste el color: "+colordeplaquita+" - Amarillo");
                } else if (Number(colordeplaquita) == 4) {
                    console.log("Elegiste el color: "+colordeplaquita+" - Azul");
                } else if (Number(colordeplaquita) == 5) {
                    console.log("Elegiste el concierto: "+colordeplaquita+" - Negro");
                } else {
                    console.log("Esa opcion no es valida, por favor vuelve a loguearte");
                login();
                }
                BD[i].productos.push(plaquita,numerodetelefono,nombredeperrito,colordeplaquita);
                console.log(BD[i]);
            /*console.log(BD[i].productos.push([plaquita,nombredeperrito,numerodetelefono,colordeplaquita]));
            console.log(productoyuser);*/
        } else if (Number(BD.length)-1 === i){
            let noexiste = prompt("Tu usuario no existe, quieres registrarte? (Responde si o no)");
            if (noexiste === "si") {
                login();
            } else {
                alert("Lo sentimos, no podemos continuar con tu compra, pero en cualquier momento puedes crear tu cuenta")
            }
        }   //close if user   
    }  //close for 
}//close function


document.body.onload = login()

document.getElementById("lascompras").addEventListener("click", compra); //nodo








