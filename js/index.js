function cargarJuego() {
    const mostrarAtaque = document.getElementById("esconderA");
    const mostrarTitulo = document.getElementById("seleccionar-mascota");
    const mostrarReiniciar = document.getElementById("reiniciar");
    const seleccionJ = document.getElementById("mascota-jugador");

    const seleccionE = document.getElementById("mascota-enemigo");

    const ataqueJugador = document.getElementById("ataque-jugador");
    const mostrarMensajes = document.getElementById("esconderM");
    const mostrarMF = document.getElementById("esconderMF");
    const mascotaJugador = document.getElementById("mascota-jugador1");
    const mascotaEnemigo = document.getElementById("mascota-enemigo1");

    const ataqueEnemigo = document.getElementById("ataque-enemigo");

    const mensaje = document.getElementById("mensaje");

    const vE = document.getElementById("vidas-enemigo");
    const vJ = document.getElementById("vidas-jugador");
    const ataqueN = document.getElementById("atacaN");

    const btnMascotaJugador = document.getElementById("btn-mascotas");
    const btnReiniciar = document.getElementById("reiniciar");

    const contenedorMokepones = document.getElementById("contenedor-mokepones")
    const btnsAtaque = document.getElementById("btns-ataque");

    let mokepones = [];
    let atqJugador = [];
    let atqEnemigo = [];
    let atqEnemigoSel = [];
    let atqj;
    let atqE;
    let opcionMokepones;
    let anturium;
    let basilius;
    let bomper;
    let bretus;
    let canenuto;
    let cliptus;
    let dracunius;
    let energor;
    let fleppo;
    let flopper;
    let fonson;
    let holgon;
    let jounjo;
    let manson;
    let minus;
    let mortum;
    let murdor;
    let navegris;
    let plesium;
    let romron;
    let sobrian;
    let solver;
    let sulgun;
    let tobias;
    let volmer;
    let yegoto;
    let yohoo;
    let yompler;
    let zooter;
    let zoripon;
    let vidasEnemigo = 0;
    let vidasJugador = 0;
    let selMJ;
    let seleccionME;
    let indexAtaqueJugador;
    let indexAtaqueEnemigo;
    let selME;
    let btnFuego;
    let btnAgua;
    let btnTierra;
    let botones = [];
    let botonesMascotas = [];
    let deshabilitar;
    let pt;
    let click = 0;
    let pierdeFuego = ["AGUA", "HIELO"];
    let ganaFuego = ["AIRE", "METAL","RAYO"];
    let pierdeAgua = ["TIERRA","METAL","RAYO"];
    let ganaAgua = ["FUEGO", "AIRE"];
    let pierdeTierra = ["RAYO", "METAL", "AIRE"];
    let ganaTierra = ["AGUA", "HIELO"];
    let pierdeRayo = ["AIRE", "FUEGO"];
    let ganaRayo = ["TIERRA", "AGUA", "HIELO", "METAL"];
    let pierdeAire = ["FUEGO", "AGUA", "HIELO"];
    let ganaAire = ["RAYO", "TIERRA", "METAL"];
    let pierdeMetal = ["FUEGO", "RAYO", "AIRE"];
    let ganaMetal = ["AGUA", "TIERRA", "HIELO"];
    let pierdeHielo = ["TIERRA", "METAL", "RAYO"];
    let ganaHielo = ["FUEGO", "AIRE"];
    

    /* logica de lucha
    Elementales:

    FUEGO: Pierde contra AGUA, HIELO,  y gana contra AIRE, METAL, RAYO

    AGUA: Pierde contra TIERRA, METAL, RAYO y gana contra FUEGO, AIRE

    TIERRA: Pierde contra RAYO, METAL, AIRE y gana contra AGUA, HIELO

    RAYO: Pierda contra AIRE, FUEGO y gana contra TIERRA, AGUA, HIELO, METAL

    AIRE: Pierda contra FUEGO, AGUA, HIELO y gana contra RAYO, TIERRA, METAL

    METAL: Pierda contra FUEGO, RAYO, AIRE y gana contra AGUA, TIERRA, HIELO

    HIELO: Pierde contra TIERRA, METAL, RAYO y gana contra FUEGO, AIRE
    */

    class Mokepon {
        constructor (nombre, imagen, vida) {
            this.nombre = nombre;
            this.imagen = imagen;
            this.vida = vida;
            this.ataques = [];
        }
    }

    let mokeAnturium = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeBasilius = new Mokepon('Basilius', 'img/basilius.png', 5);
    let mokeBomper = new Mokepon('Bomper', 'img/bomper.png', 5);
    let mokeBretus = new Mokepon('Bretus', 'img/bretus.png', 5)
    let mokeCanenuto = new Mokepon('Canenuto', 'img/canenuto.png', 5)
    let mokeCliptus = new Mokepon('Cliptus', 'img/cliptus.png', 5);
    let mokeDracunius = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeEnergor = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeFleppo = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeFlopper = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeFonson = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeHolgon = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeJounjo = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeManson = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeMinus = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeMortum = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeMurdor = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeNavegris = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokePlesium = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeRomron = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeSobrian = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeSolver = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeSulgun = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeTobias = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeVolmer = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeYegoto = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeYohoo = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeYompler = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeZooter = new Mokepon('Anturium', 'img/anturium.png', 5);
    let mokeZoripon = new Mokepon('Anturium', 'img/anturium.png', 5);

    /* ATAQUES:
    {nombre: 'Tierra 🌱', id: 'btn-tierra'},
    {nombre: 'Metal 🦾', id: 'btn-metal'},
    {nombre: 'Aire 🌪️', id: 'btn-aire'},
    {nombre: 'Agua 💧', id: 'btn-agua'},
    {nombre: 'Hielo 🧊', id: 'btn-hielo'},
    {nombre: 'Fuego 🔥', id: 'btn-fuego'},
    {nombre: 'Rayo ⚡', id: 'btn-rayo'}, */

    mokeAnturium.ataques.push(
        {nombre: 'Hielo 🧊', id: 'btn-hielo'},
        {nombre: 'Agua 💧', id: 'btn-agua'},
        {nombre: 'Metal 🦾', id: 'btn-metal'},
    )

    mokeBasilius.ataques.push(
        {nombre: 'Hielo 🧊', id: 'btn-hielo'},
        {nombre: 'Metal 🦾', id: 'btn-metal'},
        {nombre: 'Aire 🌪️', id: 'btn-aire'},
    )

    mokeBomper.ataques.push(
        {nombre: 'Fuego 🔥', id: 'btn-fuego'},
        {nombre: 'Rayo ⚡', id: 'btn-rayo'},
        {nombre: 'Metal 🦾', id: 'btn-metal'},
    )

    mokeBretus.ataques.push(
        {nombre: 'Fuego 🔥', id: 'btn-fuego'},
        {nombre: 'Metal 🦾', id: 'btn-metal'},
        {nombre: 'Aire 🌪️', id: 'btn-aire'},
        {nombre: 'Tierra 🌱', id: 'btn-tierra'},
    )

    mokeCanenuto.ataques.push(
        {nombre: 'Agua 💧', id: 'btn-agua'},
        {nombre: 'Metal 🦾', id: 'btn-metal'},
        {nombre: 'Rayo ⚡', id: 'btn-rayo'},
    )

    mokeCliptus.ataques.push(
        {nombre: 'Tierra 🌱', id: 'btn-tierra'},
        {nombre: 'Metal 🦾', id: 'btn-metal'},
        {nombre: 'Aire 🌪️', id: 'btn-aire'},
    )

    mokepones.push(mokeAnturium,mokeBasilius,mokeBomper,mokeBretus,mokeCanenuto,mokeCliptus)

    mokepones.forEach((mokepon) => {
        opcionMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label for=${mokepon.nombre} class="separadores">
            <img src=${mokepon.imagen} alt=${mokepon.nombre} class="imgMoke">
            <p>${mokepon.nombre}</p>
        </label>
        `;
        contenedorMokepones.innerHTML += opcionMokepones;
        anturium = document.getElementById("Anturium");
        basilius = document.getElementById("Basilius");
        bomper = document.getElementById("Bomper");
        bretus = document.getElementById("Bretus")
        canenuto = document.getElementById("Canenuto")
        cliptus = document.getElementById("Cliptus")
    })

    function seleccionarMascotaJugador() {
        botonesMascotas = document.querySelector('input[name="mascota"]:checked');

        if (botonesMascotas) {
            seleccionJ.textContent = botonesMascotas.id;
            selMJ = botonesMascotas.id;
        }
        else if (botonesMascotas === null) {
            return alert("Selecciona una mascota");
        }

        mostrarReiniciar.style.display = "block";
        mostrarAtaque.style.display = "flex";
        btnMascotaJugador.disabled = true;
        mostrarTitulo.style.display = "none";

        extrarAtaques(selMJ);

        seleccionarMascotaEnemigo();

    }

    function extrarAtaques(selMJ) {
        let ataques;
        for (let i = 0; i < mokepones.length; i++) {
            if (selMJ === mokepones[i].nombre) {
                ataques = mokepones[i].ataques;
            }
            
        }
        mostrarAtaques(ataques);
    }

    function mostrarAtaques(ataques) {

        for (let i = 0; i < 4; i++) {
            let ataquesAleatorios = aleatorio(0,ataques.length - 1);
            console.log(ataquesAleatorios)
            atqj = `
                <button id=${ataques[ataquesAleatorios].id} class="btn-atq BAtaque">${ataques[ataquesAleatorios].nombre}</button>
                `;
                btnsAtaque.innerHTML += atqj;
                btnFuego = document.getElementById("btn-fuego");
                btnTierra = document.getElementById("btn-tierra");
                btnAgua = document.getElementById("btn-agua");
                botones = document.querySelectorAll('.BAtaque')
            console.log(i)
        }
        console.log("=> " + ataques)
    }

    function secuenciaAtaque() {

        mascotaJugador.textContent = selMJ;
        mascotaEnemigo.textContent = seleccionME;

        botones.forEach((boton) => {
            function validarResolucion() {
          
                if (screen.width < 1200) {
                    mostrarMensajes.style.display = "block";
                }
                else {
                    mostrarMensajes.style.display = "flex";
                }
                
                mostrarMensajes.style.backgroundColor = "transparent";
            }
            
            boton.addEventListener("click", (e) => {
                click++;
                let ataqueClickJugador = e.target.textContent;
                document.getElementById(boton.id).classList.add = "deshabilitar";
                boton.style.backgroundColor = "rgba(163, 141, 141, 0.993)";
                boton.disabled = true
                let idJ = "jugador"

                selAtaque(ataqueClickJugador,idJ)
                validarResolucion()
                seleccionarAtaqueEnemigo();
            })
        })
        console.log(botones)
    }

    function seleccionarMascotaEnemigo() {
        selME = aleatorio(0,mokepones.length-1);
        console.log(selME)
        atqEnemigo = mokepones[selME].ataques;
        console.log(atqEnemigo)
        seleccionME = mokepones[selME].nombre;
        seleccionE.textContent = mokepones[selME].nombre;
        secuenciaAtaque();
    }

    function selAtaque(ataque,identificador) {

        if (ataque === 'Fuego 🔥') {
            if (identificador === "jugador") {
                atqJugador = "FUEGO";
                ataqueJugador.textContent = atqJugador;
            }else if (identificador === "enemigo") {
                atqEnemigoSel = "FUEGO";
                ataqueEnemigo.textContent = atqEnemigoSel;
            }
            
        }else if (ataque === 'Agua 💧') {
            if (identificador === "jugador") {
                atqJugador = "AGUA";
                ataqueJugador.textContent = atqJugador
            }else if (identificador === "enemigo") {
                atqEnemigoSel = "AGUA";
                ataqueEnemigo.textContent = atqEnemigoSel
            }

        }else if (ataque === 'Aire 🌪️') {
            if (identificador === "jugador") {
                atqJugador = "AIRE";
                ataqueJugador.textContent = atqJugador;
            }else if (identificador === "enemigo") {
                atqEnemigoSel = "AIRE";
                ataqueEnemigo.textContent = atqEnemigoSel
            }
        
        }else if (ataque === 'Metal 🦾') {
            if (identificador === "jugador") {
                atqJugador = "METAL";
                ataqueJugador.textContent = atqJugador;
            }else if (identificador === "enemigo") {
                atqEnemigoSel = "METAL";
                ataqueEnemigo.textContent = atqEnemigoSel
            }

        }else if (ataque === 'Hielo 🧊') {
            if (identificador === "jugador") {
                atqJugador = "HIELO";
                ataqueJugador.textContent = atqJugador;
            }else if (identificador === "enemigo") {
                atqEnemigoSel = "HIELO";
                ataqueEnemigo.textContent = atqEnemigoSel
            }

        }else {
            if (identificador === "jugador") {
                atqJugador = "TIERRA";
                ataqueJugador.textContent = atqJugador;
            }else if (identificador === "enemigo") {
                atqEnemigoSel = "TIERRA";
                ataqueEnemigo.textContent = atqEnemigoSel
            }
        }
    }

    function seleccionarAtaqueEnemigo() {
        let ataqueAleatorio = aleatorio(0,atqEnemigo.length - 1)

        for (let a = 0; a < atqEnemigo.length; a++) {
            if (atqEnemigo[a] == atqEnemigo[ataqueAleatorio]) {
                idE = "enemigo";
                console.log("ataque enemigo: " + atqEnemigo[a].nombre )
                selAtaque(atqEnemigo[a].nombre,idE)
            }
            
        }

        console.log(atqEnemigoSel + " " + atqJugador)
        lucha();

    }

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function procesarLucha(v1) {
        for (let g = 0; g < v1.length; g++) {
            console.log("aqui" + v1[g]);
            if (atqEnemigoSel !== v1[g]) {
                pt = 0; 
            }else {
                pt = 1;
                return
            }      
        }
        
    }

    function comparacionAtaques(ganador,perdedor){
        
        let mostrarMF = document.getElementById("esconderMF");
        procesarLucha(ganador)
        console.log("gana" + pt)
        if (pt === 1) {
            mostrarMF.style.backgroundColor = "green";
            mensaje.textContent = "¡La mascota del enemigo a recibido daño! 💪💪💪";
            vidasJugador++;
        }else {
            mostrarMF(perdedor);
            console.log("gana" + pt)
            if (pt === 1) {
                mostrarMF.style.backgroundColor = "red";
                mensaje.textContent = "¡Tu mascota a recibido daño! 💥💥💥";
                vidasEnemigo++;
            }else {
                mostrarMF.style.backgroundColor = "rgba(124, 56, 0, 0.651)";
                mensaje.textContent = "No se produce daño en los jugadores 🙈🙈🙈";
            }
        }
    }

    function lucha() {
        if (atqJugador == "FUEGO") {
            comparacionAtaques(ganaFuego,pierdeFuego)
        }else if (atqJugador == "AGUA") {
            comparacionAtaques(ganaAgua,pierdeAgua)
        }else if (atqJugador == "TIERRA") {
            comparacionAtaques(ganaTierra,pierdeTierra)
        }else if (atqJugador == "RAYO") {
            comparacionAtaques(ganaRayo,pierdeRayo)
        }else if (atqJugador == "AIRE") {
            comparacionAtaques(ganaAire,pierdeAire)
        }else if (atqJugador == "METAL") {
            comparacionAtaques(ganaMetal,pierdeMetal)
        }else /* if (atqJugador == "HIELO")  */{
            comparacionAtaques(ganaHielo,pierdeHielo)
        }

        comprobarVidas();
        
    }

    function comprobarVidas() {

        if (click === 4) {
            vJ.textContent = vidasJugador;
            vE.textContent = vidasEnemigo;
            function resultados(){
                if (vidasJugador < vidasEnemigo) {
                    mostrarMF.style.backgroundColor = "red";
                    mensaje.innerHTML = "¡Perdiste la batalla!... <b>¡El enemigo gana!</b> 😭😭😭";
                    ataqueN.textContent = "Reinicia el juego";
                }
                else if (vidasJugador > vidasEnemigo){
                    mostrarMF.style.backgroundColor = "green";
                    mensaje.innerHTML = "¡Felicitaciones, <b>has ganado la batalla!</b> 🥳🥳🥳";
                    ataqueN.textContent = "Reinicia el juego";
                }
                else {
                    mostrarMF.style.backgroundColor = "rgba(124, 56, 0, 0.651)";
                    mensaje.innerHTML = "¡Que batalla, <b>se ha dado un empate!</b> 🥳🥳🥳";
                    ataqueN.textContent = "Reinicia el juego";
                }
            }

            setTimeout(resultados,3000)
        }else {
            vJ.textContent = vidasJugador;
            vE.textContent = vidasEnemigo;
        }
    }

    /* alert("Ancho: " + screen.width + " Alto: " + screen.height) */
    
    btnMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    btnReiniciar.addEventListener("click", () => {
        location.reload();
    })

}

window.addEventListener("load", cargarJuego);
