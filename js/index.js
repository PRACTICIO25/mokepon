function cargarJuego() {
    let atqj;
    let atqE;
    let vidasEnemigo = 5;
    let vidasJugador = 5;
    let selMJ;
    let selME;
    
    alert("Ancho: " + screen.width + " Alto: " + screen.height)

    function seleccionarMascotaJugador() {

        let carmelium = document.getElementById("carmelium");
        let malaquias = document.getElementById("malaquias");
        let conetizon = document.getElementById("conetizon");
        let seleccionJ = document.getElementById("mascota-jugador");
        
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

        let mostrarAtaque = document.getElementById("esconderA");
        let mostrarTitulo = document.getElementById("seleccionar-mascota");
        let mostrarReiniciar = document.getElementById("reiniciar");

        mostrarReiniciar.style.display = "block";
        mostrarAtaque.style.display = "flex";
        btnMascotaJugador.disabled = true;
        mostrarTitulo.style.display = "none";

        seleccionarMascotaEnemigo()

    }

    function seleccionarMascotaEnemigo() {
        let seleccionE = document.getElementById("mascota-enemigo");
        let ataqueAleatorio = numeroMaxMin(1,3);
        
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
        let ataqueJugador = document.getElementById("ataque-jugador");
        let btnFuego = document.getElementById("btn-fuego");
        let btnAgua = document.getElementById("btn-agua");
        let btnTierra = document.getElementById("btn-tierra");
        let mostrarMensajes = document.getElementById("esconderM");
        let mascotaJugador = document.getElementById("mascota-jugador1");
        let mascotaEnemigo = document.getElementById("mascota-enemigo1");

        mascotaJugador.textContent = selMJ;
        mascotaEnemigo.textContent = selME;

        btnAgua.disabled = false;
        btnFuego.disabled = false;
        btnTierra.disabled = false;

        btnFuego.addEventListener("click", () => {
            if (screen.width < 700) {
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
            let ataqueEnemigo = document.getElementById("ataque-enemigo");
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
            let mensaje = document.getElementById("mensaje");
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
            let vE = document.getElementById("vidas-enemigo");
            let vJ = document.getElementById("vidas-jugador");
            let ataqueN = document.getElementById("atacaN");

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


    let btnMascotaJugador = document.getElementById("btn-mascotas");
    btnMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    
    let btnReiniciar = document.getElementById("reiniciar");
    btnReiniciar.addEventListener("click", () => {
        location.reload();
    })

    

}

window.addEventListener("load", cargarJuego);
