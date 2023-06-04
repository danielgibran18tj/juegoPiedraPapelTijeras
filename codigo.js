//1 es piedra, 2 es papel y 3 es tijera
function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function jugadores(jugadaa){
    let respuesta = ""
    if(jugadaa==1){
        respuesta = ("se eligio piedra")
        }
        else if(jugadaa==2){
            respuesta=("se eligio papel")
        }
        else if(jugadaa==3){
            respuesta=("se eligio tijeras")
        }
        else {
            respuesta=("se eligio otro numero fuera del 1,2 o 3")
        }
        return respuesta
}
let jugador2=0
let jugador =0
let triunfo =0
let perdida =0

while(triunfo<3 && perdida<3){
    jugador2 = aleatorio(1,3)
    jugador= prompt("elije : 1 es piedra, 2 es papel y 3 es tijera")
    
    alert ("  "+jugadores(jugador))
    alert ("  "+ jugadores(jugador2))
    
    //lucha entre manos
    if(jugador==jugador2){
        alert ("ESTO FUE UN EMPATEE")
        }
        else if (jugador==1&&jugador2==3){
        alert("gano usuario , piedra gana a tijeras")
        triunfo=triunfo+1}
        else if (jugador==2&&jugador2==1){
        alert("gano usuario , papel gana a piedra")
        triunfo=triunfo+1}
        else if (jugador==3&&jugador2==2){
        alert("gano usuario , tijeras gana a papel")
        triunfo=triunfo+1}
        else {
        alert("perdisteee, gano PC")
        perdida=perdida+1}
    alert("llevas " + triunfo+ " triunfos, y tambien llevas "+perdida+" derrotas")
}

if (triunfo == 3){
    alert ("ganaste el total de las partidas")
}
    else {
        alert("pc gano el total de las partidas")
    }
