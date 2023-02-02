function cargarJuego() {
    const mostrarAtaque = document.getElementById("esconderA");
    const mostrarTitulo = document.getElementById("seleccionar-mascota");
    const mostrarReiniciar = document.getElementById("reiniciar");
    const carmelium = document.getElementById("carmelium");
    const malaquias = document.getElementById("malaquias");
    const conetizon = document.getElementById("conetizon");
    const seleccionJ = document.getElementById("mascota-jugador");

    const seleccionE = document.getElementById("mascota-enemigo");
    const ataqueAleatorio = numeroMaxMin(1,3);

    const ataqueJugador = document.getElementById("ataque-jugador");
    const btnFuego = document.getElementById("btn-fuego");
    const btnAgua = document.getElementById("btn-agua");
    const btnTierra = document.getElementById("btn-tierra");
    const mostrarMensajes = document.getElementById("esconderM");
    const mascotaJugador = document.getElementById("mascota-jugador1");
    const mascotaEnemigo = document.getElementById("mascota-enemigo1");

    const ataqueEnemigo = document.getElementById("ataque-enemigo");

    const mensaje = document.getElementById("mensaje");

    const vE = document.getElementById("vidas-enemigo");
    const vJ = document.getElementById("vidas-jugador");
    const ataqueN = document.getElementById("atacaN");

    const btnMascotaJugador = document.getElementById("btn-mascotas");
    const btnReiniciar = document.getElementById("reiniciar");

    
    let atqj;
    let atqE;
    let vidasEnemigo = 5;
    let vidasJugador = 5;
    let selMJ;
    let selME;

    function seleccionarMascotaJugador() {
        
        if (carmelium.checked) {
            selMJ = "Carmelium";
            seleccionJ.textContent = "Carmelium";
        }
        else if (malaquias.checked) {
            selMJ = "Malaquias";
            seleccionJ.textContent = "Malaquias";
        }
        else if (conetizon.checked) {
            selMJ = "Conetizon";
            seleccionJ.textContent = "Conetizon";
        }
        else {
            alert("Selecciona una mascota");
            return cargarJuego()
        }

        mostrarReiniciar.style.display = "block";
        mostrarAtaque.style.display = "flex";
        btnMascotaJugador.disabled = true;
        mostrarTitulo.style.display = "none";

        seleccionarMascotaEnemigo()

    }

    function seleccionarMascotaEnemigo() {
        
        switch (ataqueAleatorio) {
            case 1:
                selME = "Carmelium";
                seleccionE.textContent = "Carmelium";
                break;

            case 2:
                selME = "Malaquias";
                seleccionE.textContent = "Malaquias";
                break;

            case 3:
                selME = "Conetizon";
                seleccionE.textContent = "Conetizon"
                break;
        }
        
        seleccionarAtaque();

    }

    function numeroMaxMin(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function seleccionarAtaque() {

        mascotaJugador.textContent = selMJ;
        mascotaEnemigo.textContent = selME;

        btnAgua.disabled = false;
        btnFuego.disabled = false;
        btnTierra.disabled = false;

        btnFuego.addEventListener("click", () => {
            if (screen.width < 1200) {
                mostrarMensajes.style.display = "block";
            }
            else {
                mostrarMensajes.style.display = "flex";
            }
            ataqueJugador.textContent = "FUEGO";
            atqj = "fuego";
            seleccionarAtaqueEnemigo();
        })

        btnAgua.addEventListener("click", () => {
            if (screen.width < 700) {
                mostrarMensajes.style.display = "block";
            }
            else {
                mostrarMensajes.style.display = "flex";
            }
            ataqueJugador.textContent = "AGUA";
            atqj = "agua";
            seleccionarAtaqueEnemigo();
        })

        btnTierra.addEventListener("click", () => {
            if (screen.width < 700) {
                mostrarMensajes.style.display = "block";
            }
            else {
                mostrarMensajes.style.display = "flex";
            }
            ataqueJugador.textContent = "TIERRA";
            atqj = "tierra";
            seleccionarAtaqueEnemigo();
        })

        function seleccionarAtaqueEnemigo() {
            let ataqueAleatorio = Math.floor(Math.random() * (3 - 1 + 1) + 1);

            switch (ataqueAleatorio) {
                case 1:
                    atqE = "fuego";
                    ataqueEnemigo.textContent = "FUEGO";
                    break;

                case 2:
                    atqE = "agua";
                    ataqueEnemigo.textContent = "AGUA";
                    break;

                case 3:
                    atqE = "tierra"
                    ataqueEnemigo.textContent = "TIERRA";
                    break;
            }

            lucha();

        }

        function lucha() {
            let mostrarMensajes = document.getElementById("esconderMF");
    

            if (atqj.toLowerCase() == "fuego" && atqE.toLowerCase() == "fuego") {
                mostrarMensajes.style.backgroundColor = "rgba(124, 56, 0, 0.651)";
                mensaje.textContent = "No se produce daño en los jugadores 🙈🙈🙈";
            }
            else if (atqj.toLowerCase() == "fuego" && atqE.toLowerCase() == "agua") {
                mostrarMensajes.style.backgroundColor = "red";
                mensaje.textContent = "¡Tu mascota a recibido daño! 💥💥💥";
                vidasJugador--;
            }
            else if (atqj.toLowerCase() == "fuego" && atqE.toLowerCase() == "tierra") {
                mostrarMensajes.style.backgroundColor = "green";
                mensaje.textContent = "¡La mascota del enemigo a recibido daño! 💪💪💪";
                vidasEnemigo--;
            }

            else if (atqj.toLowerCase() == "agua" && atqE.toLowerCase() == "fuego") {
                mostrarMensajes.style.backgroundColor = "green";
                mensaje.textContent = "¡La mascota del enemigo a recibido daño! 💪💪💪";
                vidasEnemigo--;
            }
            else if (atqj.toLowerCase() == "agua" && atqE.toLowerCase() == "agua") {
                mostrarMensajes.style.backgroundColor = "rgba(124, 56, 0, 0.651)";
                mensaje.textContent = "No se produce daño en los jugadores 🙈🙈🙈";
            }
            else if (atqj.toLowerCase() == "agua" && atqE.toLowerCase() == "tierra") {
                mostrarMensajes.style.backgroundColor = "red";
                mensaje.textContent = "¡Tu mascota a recibido daño! 💥💥💥";
                vidasJugador--;
            }

            else if (atqj.toLowerCase() == "tierra" && atqE.toLowerCase() == "fuego") {
                mostrarMensajes.style.backgroundColor = "red";
                mensaje.textContent = "¡Tu mascota a recibido daño! 💥💥💥";
                vidasJugador--;
            }
            else if (atqj.toLowerCase() == "tierra" && atqE.toLowerCase() == "agua") {
                mostrarMensajes.style.backgroundColor = "green";
                mensaje.textContent = "¡La mascota del enemigo a recibido daño! 💪💪💪";
                vidasEnemigo--;
            }
            else if (atqj.toLowerCase() == "tierra" && atqE.toLowerCase() == "tierra") {
                mostrarMensajes.style.backgroundColor = "rgba(124, 56, 0, 0.651)";
                mensaje.textContent = "No se produce daño en los jugadores 🙈🙈🙈";
            }

            comprobarVidas();
            
        }

        function comprobarVidas() {

            if (vidasJugador <= 0) {
                vJ.textContent = vidasJugador;
                vE.textContent = vidasEnemigo;
                mensaje.innerHTML = "¡Perdiste la batalla!... <b>¡El enemigo gana!</b> 😭😭😭";
                ataqueN.textContent = "Reinicia el juego";

                btnAgua.style.backgroundColor = "rgb(128, 128, 128)";
                btnAgua.disabled = true;
                btnFuego.style.backgroundColor = "rgb(128, 128, 128)";
                btnFuego.disabled = true;
                btnTierra.style.backgroundColor = "rgb(128, 128, 128)";
                btnTierra.disabled = true;
            }
            else if (vidasEnemigo == 0) {
                vJ.textContent = vidasJugador;
                vE.textContent = vidasEnemigo;
                mensaje.innerHTML = "¡Felicitaciones, <b>has ganado la batalla!</b> 🥳🥳🥳";
                ataqueN.textContent = "Reinicia el juego";

                btnAgua.style.backgroundColor = "rgb(128, 128, 128)";
                btnAgua.disabled = true;
                btnFuego.style.backgroundColor = "rgb(128, 128, 128)";
                btnFuego.disabled = true;
                btnTierra.style.backgroundColor = "rgb(128, 128, 128)";
                btnTierra.disabled = true;
            }
            else {
                vJ.textContent = vidasJugador;
                vE.textContent = vidasEnemigo;
            }
        }

    }

    alert("Ancho: " + screen.width + " Alto: " + screen.height)
    btnMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    btnReiniciar.addEventListener("click", () => {
        location.reload();
    })

}

window.addEventListener("load", cargarJuego);
