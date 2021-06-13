//Problema 2: 
let q = 3;
let tiempo = 0;
let finSimu = 900;
let proxLlegada = 20;
let proxFinServicio = 9999;
let proxSalidaZS = 9999;
let deltaFinServicio = 21;
let deltaLlegada = 17;
let deltaZonaSeguridad = 10;
let atendidos = 0;
let ps = false;
let i = 0;
let ZS = false;



proxLlegada = randomLlegada(10,40);

console.log('Hora actual', convertir(tiempo));
console.log('Proxima llegada', convertir(proxLlegada));
console.log('Proximo fin de servicio', convertir(proxFinServicio));
console.log('Proximo salida de la ZS', convertir(proxSalidaZS));
console.log('Estado de ZS', ZS);
console.log('Cola', q);
console.log('Puesto de servicio', ps);



while (i <= 10) {

    let op = proximoEvento(proxLlegada,proxFinServicio,proxSalidaZS,9999);
    deltaLlegada = randomLlegada(10,40);
    deltaFinServicio = randomFinServicio(20,50);
    deltaSalidaCola = randomSalidaCola(5,30);
    switch (op) {
        case 1:
            llegada()
            console.log('-----------------------------------');
            console.log('LLEGADA', op);
            break;
        case 2:
            finServicio();
            console.log('-----------------------------------');
            console.log('FINSERVICIO', op)
            break;    
        case 3:
            salidaZS();
            console.log('-----------------------------------');
            console.log('FIN ZONA DE SEGURIDAD', op);
            break;            
        default:
            if(proxLlegada == proxFinServicio){
              llegada();
            }else if(proxFinServicio == proxSalidaZS){
              finServicio();
            }else{
              salidaZS();
            }       
            console.log('-----------------------------------');
            console.log('DEFAULT', op) 
            break;
    }




  console.log('-----------------------------------');
  console.log('Hora actual', convertir(tiempo));
  console.log('Proxima llegada', convertir(proxLlegada));
  console.log('Proximo fin de servicio', convertir(proxFinServicio));
  console.log('Proximo salida de la ZS', convertir(proxSalidaZS));
  console.log('Estado de ZS', ZS);
  console.log('Cola', q);
  console.log('Puesto de servicio', ps);
  i++;
  alert();
}

console.log('personas atendidas', atendidos);


function llegada() {

    tiempo = proxLlegada;
    if(ps){
        q++;
    }else if(!ps && !ZS){
        proxSalidaZS = tiempo + deltaZonaSeguridad;
        ZS = true;
    }else{
        q++;
    }
    proxLlegada = proxLlegada + deltaLlegada;
}

function finServicio() {

    tiempo = proxFinServicio;
    ps = false;
    atendidos ++;
    if(q > 0){
        q--;
        ZS = true;
        proxSalidaZS = tiempo + deltaZonaSeguridad;
        proxFinServicio = 9999;
    }else{
        proxFinServicio = 9999;
    }
}

function salidaZS() {

    tiempo = proxSalidaZS;
    if(ZS){
        ps = true;
        proxFinServicio = tiempo + deltaFinServicio;
        proxSalidaZS = 9999;
    }
    ZS = false;
}



function convertir(segundosP) {

  if(segundosP == null){
    return `Sin hora disponible`;
  }

  const segundos = (Math.round(segundosP % 60));
  const horas = (Math.floor(segundosP / 3600)) + 8;
  const minutos = (Math.floor(segundosP / 60) % 60);

  //output.innerHTML = `<br>${horas} horas, ${minutos} minutos y ${segundos} segundos.`;
  return `${horas} horas, ${minutos} minutos y ${segundos} segundos.`;


}



function randomLlegada(min, max) {

  max += 1;
  return Math.floor(Math.random() * (max - min) + min);
  
}

function randomFinServicio(min, max) {

  max += 1;
  return Math.floor(Math.random() * (max - min) + min);
  
}

function randomSalidaCola(min, max) {

  max += 1;
  return Math.floor(Math.random() * (max - min) + min);
  
}

function proximoEvento(a,b,c,d) {
    
    if(a < b && a < c && a < d ){
        return 1;
    }else if(b < a && b < c && b < d){
        return 2;
    }else if(c < a && c < b && c < d){
        return 3;
    }else{
        return 4;
    }

}