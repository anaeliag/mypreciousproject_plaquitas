//document.getElementById("menuproductos").addEventListener("mouseover",necesitasayuda);

// Get the modal
/*var modal = document.getElementById('close_window');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/

/*document.addEventListener(
    "click",
    function(event) {
      // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
      if (
        event.target.matches(".button-close-modal") ||
        !event.target.closest(".modal")
      ) {
        closeModal()
      }
    },
    false
  )*/
  
  /*function closeModal() {
    /*document.querySelector(".modal").style.display = "none"
    document.querySelector(".modal").classList.remove('fade-in');*/
    /*document.querySelector(".modal").hide*/
    /*modal.hide();*/
    /*const myModal = bootstrap.Modal(document.getElementById(".modal"));
    myModal.hide();
  }*/


let user_email = "null" 
function login() {
        const user_email = document.getElementById("floatingInput").value;
        console.log(user_email);
        const contrasena = document.getElementById("floatingPassword").value;
        console.log(contrasena);
        const others = document.getElementsByClassName("form-floating mb-3").value;
        console.log(others);
        for (i=0;i<BD.length;i++){
            if (user_email === BD[i].email && contrasena === BD[i].contrasena){
                //construyePerfil()
                alert(document.getElementById("areaMensajes").innerText = "Bienvenido "+BD[i].nombre);
                console.log("Bienvenida/o "+BD[i].nombre+", estaremos contentos de servirte");

                /*document.getElementById("loginline").addEventListener("mouseup", closeModal);*/
                //document.getElementById('loginline').addEventListener('mouseup',loginbutton)
            
            } else if (Number(BD.length)-1 === i){
                console.log("usuario o contraseña incorrectas");
                alert("usuario o contraseña incorrectas")
            }
        }
    } 

    /*function loginbutton() {
         // hide button (still takes up space on page)
    loginbutton.style.visibility = 'hidden';

    // show div
    const logoutbutton = document.getElementById('logoutbutton');
    logoutbutton.style.visibility = 'visible';
    }*/

    function registrame() {
        const user_email = document.getElementById("floatingInput").value;
        console.log(user_email);
        const contrasena = document.getElementById("floatingPassword").value;
        console.log(contrasena);
        const others = document.getElementsByClassName("form-floating mb-3").value;
        console.log(others);
            console.log("Bienvenido "+usuario)
            const newUser = new Usuario(usuario, nombre, contrasena);
            const usermasnewuser = BD.concat(newUser);
            console.log(usermasnewuser)
            alert(document.getElementById("areaMensajes").innerText = "Bienvenido "+usuario);
            console.log("Bienvenida/o "+usuario+", estaremos contentos de servirte");
            document.getElementById("lascompras").addEventListener("click", compradeusuarionuevo);
    }

        
        //hidebutton();
        //element.addEventListener("keyup", hidebutton);

        const loginbutton = document.getElementById('loginbutton');
        const savechanges = document.getElementById('loginline');

        savechanges.addEventListener('click', () => {
        // hide button (still takes up space on page)
        loginbutton.style.visibility = 'hidden';

        // show div
        const logoutbutton = document.getElementById('logoutbutton');
        logoutbutton.style.visibility = 'visible';
        });

        
        const link = document.getElementById('linkregistro');

        link.addEventListener('click', () => {
          const form = document.getElementById('registro');
          if (form.style.display === 'none') {
                // 👇️ this SHOWS the form
                form.style.display = 'block';
          } else {
            // 👇️ this HIDES the form
            form.style.display = 'none';
          }
        });

/*function construyePerfil(usuario) {
    const profile = document.createElement("h1");
    profile.textContent = `Bienvenido: ${usuario}`;
    console.log(document.getElementById("perfilUsuario"));
    document.getElementById("perfilUsuario").appendChild(profile);
  }*/

function validarnumeros (ntelefono) {
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        return re.test(ntelefono);
      }
      
function validartarjeta (ntarjeta) {
        var re = /^\(?(\d{4})\)?[- ]?(\d{4})[- ]?(\d{4})[- ]?(\d{4})$/;
        return re.test(ntarjeta);
      }

/*function telefono(numerodetelefono) {
    const pattern = new RegExp("^\\[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{4}$");
    console.log(pattern)
    if (pattern.test(numerodetelefono)) {
        console.log("Numero de telefono es valido: "+numerodetelefono);
        //return true;
    } else {
        console.log("Numero invalido");
        compra()
    }
}*/

/*function compra(){
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
       // } else if (Number(BD.length)-1 === i){
        //    let noexiste = prompt("Tu usuario no existe, quieres registrarte? (Responde si o no)");
        //    if (noexiste === "si") {
        //        login();
        //    } else {
        //        alert("Lo sentimos, no podemos continuar con tu compra, pero en cualquier momento puedes crear tu cuenta")
        //    }
    //    }   //close if user   
//    }  //close for 
//}//close function*/


function compradeusuarionuevo(){
    let mensajebienvenida = prompt("Bienvenida/o, "+usuario+ " ¿Quieres elegir una plaquita? (Responde si o no)");
    if (mensajebienvenida === "si") {
        plaquita = prompt(`Que forma quieres que tenga tu plaquita (Elige el numero de la figura de la siguiente forma (ejemplo: 1, 2 3 etc)));
        1) Redonda
        2) Corazon
        3) Cuadrada
        4) Rectangular
        5) Forma de patita
        6) Salir`);
       
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
            } else if (Number(plaquita) == 6) {
                return
            } else {
                console.log("Esa opcion no es valida, por favor vuelve a intentarlo");
                return;
            }
    } else {
            console.log("Ok, puedes elegir tus productos despues");
            return;
    }
    let nombredeperrito = prompt("Cual es en nombre de tu peludito?");
    console.log(typeof nombredeperrito)
    console.log(nombredeperrito)
    if (typeof nombredeperrito == 'string') {
        console.log("El nombre de tu peludito es: "+nombredeperrito);
    } else {
        console.log("Esa opcion no es valida, por favor vuelve a loguearte");  
        return;              
    }
    let numerodetelefono = prompt("Cual es el numero de telefono que quieres agregar a la plaquita?(Ejemplo: 331-145-7698)");
    if (validarnumeros(numerodetelefono)) {
        console.log("Numero de telefono es valido: "+numerodetelefono);
        //return true;
    } else {
        alert("Numero invalido, vuelve a intentarlo")
        console.log("Numero invalido");
        return;
    }
//}//??
    const colordeplaquita = prompt(`Que color de plaquita quieres elegir (ejemplo: 1, 2 3 etc)));
        1) Rosa
        2) verde
        3) Amarilla
        4) Azul
        5) Negro
        6) Salir`);
        if (Number(colordeplaquita) == 1){
            console.log("Elegiste el color: "+colordeplaquita+" - Rosa");
        } else if (Number(colordeplaquita) == 2) {
            console.log("Elegiste el color: "+colordeplaquita+" - Verde");
        } else if (Number(colordeplaquita) == 3) {
            console.log("Elegiste el color: "+colordeplaquita+" - Amarillo");
        } else if (Number(colordeplaquita) == 4) {
            console.log("Elegiste el color: "+colordeplaquita+" - Azul");
        } else if (Number(colordeplaquita) == 5) {
            console.log("Elegiste el color: "+colordeplaquita+" - Negro");
        } else if (Number(colordeplaquita) == 6) {
            return;
        } else {
            console.log("Esa opcion no es valida, por favor vuelve a loguearte");
        login();
        }
        console.log(BD.length)
        const newUserCreated = (Number(BD.length)-1)
        BD[newUserCreated].productos.push(plaquita,numerodetelefono,nombredeperrito,colordeplaquita);
        console.log(BD[newUserCreated].nombre);
        console.log(BD[newUserCreated].productos);
        let comprasi = prompt("Quieres proceder a hacer tu pago? (Responde si o no)");
        if (comprasi == "si"){
            alert("El costo de tu plaquita es de $200.00 pesos MXN")
            let pago = prompt(`Puedes pagar con Paypal o Mercado Pago, ¿Que opcion eliges? (Elige el numero de la figura de la siguiente forma (ejemplo: 1 o 2,. etc)));
        1) Paypal
        2) Tarjeta de Debito o Credito
        3) Salir`);
        if (Number(pago) == 1){
            console.log("Elegiste: "+pago+" - Paypal");
            let correo = prompt("Ingresa tu correo electronico)");
            if (correo.includes("@hotmail.com") || correo.includes("@gmail.com")) {
                let direccion = prompt("Ingresa tu direccion (Ejemplo; Avenida siempre viva #45, Springfield)");
                if (direccion != null) {
                    alert("Tu pago a sido aplicado a tu cuenta: "+correo+" y te enviaremos tu plaquita a la direccion proporcionada, gracias por tu compra!");
                    return;
                } else {
                    alert("Direccion invalida, vuelve a intentarlo");
                    return;
                }
            } else {
                alert("Correo no valido, vuelve a intentarlo");
                return;
            }
        } else if (Number(pago) == 2) {
            console.log("Elegiste: "+pago+" - Tarjeta de Debito o Credito");
            let cuenta = prompt("Ingresa tu numero de tarjeta del siguiente modo (xxxx-xxxx-xxxx-xxxx)");
            if (validartarjeta(cuenta)) {
                let direccion = prompt("Ingresa tu direccion (Ejemplo; Avenida siempre viva #45, Springfield)");
                if (direccion != null) {
                    console.log("Numero de tarjeta valido: "+cuenta);
                    alert("Tu pago a sido aplicado a tu cuenta y te enviaremos tu plaquita a la direccion proporcionada, gracias por tu compra!");
                    return;
                } else {
                console.log("Tarjeta invalida, vuelve a intentarlo");
                return;
                }
            } else {
                alert("Tarjeta invalida, vuelve a intentarlo");
                console.log("Tarjeta invalida, vuelve a intentarlo");
            }
        }  else if (Number(pago) == 3) {
            return;
        } else {
            console.log("Esa opcion no es valida, por favor vuelve a intentarlo");
            return;
        }
    }    /*console.log(BD[i].productos.push([plaquita,nombredeperrito,numerodetelefono,colordeplaquita]));
    console.log(productoyuser);*///close if user    //close for 
}//close function

function compradeusuariologueado(){
            let mensajebienvenida = prompt("Bienvenida/o, "+usuario+ " ¿Quieres elegir una plaquita? (Responde si o no)");
            if (mensajebienvenida === "si") {
                plaquita = prompt(`Que forma quieres que tenga tu plaquita (Elige el numero de la figura de la siguiente forma (ejemplo: 1, 2 3 etc)));
                1) Redonda
                2) Corazon
                3) Cuadrada
                4) Rectangular
                5) Forma de patita
                6) Salir`);
               
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
                    } else if (Number(plaquita) == 6) {
                        return
                    } else {
                        console.log("Esa opcion no es valida, por favor vuelve a intentarlo");
                        return;
                    }
            } else {
                    console.log("Ok, puedes elegir tus productos despues");
                    return;
            }
            let nombredeperrito = prompt("Cual es en nombre de tu peludito?");
            console.log(typeof nombredeperrito)
            console.log(nombredeperrito)
            if (typeof nombredeperrito == 'string') {
                console.log("El nombre de tu peludito es: "+nombredeperrito);
            } else {
                console.log("Esa opcion no es valida, por favor vuelve a loguearte");  
                return;              
            }
            let numerodetelefono = prompt("Cual es el numero de telefono que quieres agregar a la plaquita?(Ejemplo: 331-145-7698)");
            if (validarnumeros(numerodetelefono)) {
                console.log("Numero de telefono es valido: "+numerodetelefono);
                //return true;
            } else {
                alert("Numero invalido, vuelve a intentarlo")
                console.log("Numero invalido");
                return;
            }
        //}//??
            const colordeplaquita = prompt(`Que color de plaquita quieres elegir (ejemplo: 1, 2 3 etc)));
                1) Rosa
                2) verde
                3) Amarilla
                4) Azul
                5) Negro
                6) Salir`);
                if (Number(colordeplaquita) == 1){
                    console.log("Elegiste el color: "+colordeplaquita+" - Rosa");
                } else if (Number(colordeplaquita) == 2) {
                    console.log("Elegiste el color: "+colordeplaquita+" - Verde");
                } else if (Number(colordeplaquita) == 3) {
                    console.log("Elegiste el color: "+colordeplaquita+" - Amarillo");
                } else if (Number(colordeplaquita) == 4) {
                    console.log("Elegiste el color: "+colordeplaquita+" - Azul");
                } else if (Number(colordeplaquita) == 5) {
                    console.log("Elegiste el color: "+colordeplaquita+" - Negro");
                } else if (Number(colordeplaquita) == 6) {
                    return;
                } else {
                    console.log("Esa opcion no es valida, por favor vuelve a loguearte");
                login();
                }
                BD[i].productos.push(plaquita,numerodetelefono,nombredeperrito,colordeplaquita);
                console.log(BD[i].nombre);
                console.log(BD[i].productos);
                let comprasi = prompt("Quieres proceder a hacer tu pago? (Responde si o no)");
                if (comprasi == "si"){
                    alert("El costo de tu plaquita es de $200.00 pesos MXN")
                    let pago = prompt(`Puedes pagar con Paypal o Mercado Pago, ¿Que opcion eliges? (Elige el numero de la figura de la siguiente forma (ejemplo: 1 o 2,. etc)));
                1) Paypal
                2) Tarjeta de Debito o Credito
                3) Salir`);
                if (Number(pago) == 1){
                    console.log("Elegiste: "+pago+" - Paypal");
                    let correo = prompt("Ingresa tu correo electronico)");
                    if (correo.includes("@hotmail.com") || correo.includes("@gmail.com")) {
                        let direccion = prompt("Ingresa tu direccion (Ejemplo; Avenida siempre viva #45, Springfield)");
                        if (direccion != null) {
                            alert("Tu pago a sido aplicado a tu cuenta: "+correo+" y te enviaremos tu plaquita a la direccion proporcionada, gracias por tu compra!");
                            return;
                        } else {
                            alert("Direccion invalida, vuelve a intentarlo");
                            return;
                        }
                    } else {
                        alert("Correo no valido, vuelve a intentarlo");
                        return;
                    }
                } else if (Number(pago) == 2) {
                    console.log("Elegiste: "+pago+" - Tarjeta de Debito o Credito");
                    let cuenta = prompt("Ingresa tu numero de tarjeta del siguiente modo (xxxx-xxxx-xxxx-xxxx)");
                    if (validartarjeta(cuenta)) {
                        let direccion = prompt("Ingresa tu direccion (Ejemplo; Avenida siempre viva #45, Springfield)");
                        if (direccion != null) {
                            console.log("Numero de tarjeta valido: "+cuenta);
                            alert("Tu pago a sido aplicado a tu cuenta y te enviaremos tu plaquita a la direccion proporcionada, gracias por tu compra!");
                            return;
                        } else {
                        console.log("Tarjeta invalida, vuelve a intentarlo");
                        return;
                        }
                    } else {
                        alert("Tarjeta invalida, vuelve a intentarlo");
                        console.log("Tarjeta invalida, vuelve a intentarlo");
                    }
                }  else if (Number(pago) == 3) {
                    return;
                } else {
                    console.log("Esa opcion no es valida, por favor vuelve a intentarlo");
                    return;
                }
            }    /*console.log(BD[i].productos.push([plaquita,nombredeperrito,numerodetelefono,colordeplaquita]));
            console.log(productoyuser);*///close if user    //close for 
}//close function

//document.body.onload = login()  //usado antes


document.body.onload = removelogout()

function removelogout() {
    const logoutbutton = document.getElementById('logoutbutton');
    logoutbutton.style.visibility = 'hidden';
    const form = document.getElementById('registro').style.display='none'
}

document.getElementById("logoutbutton").addEventListener("click", logout);

function logout() {
    window.location.href = "index.html";
}


/*if (logged){
    document.getElementById("lascompras").addEventListener("click", compradeusuariologueado(usuario)); //nodo
    console.log("ya entre")
} else {
    document.getElementById("lascompras").addEventListener("click", compra); //nodo
}*/

document.getElementById("loginline").addEventListener("click", login);
const button_login = document.getElementById("loginline")
console.log(button_login)

const contacto = document.getElementById("lname");
console.log(contacto)
