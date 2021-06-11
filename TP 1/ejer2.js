//Problema 2: 
let q = 3;
let tiempo = 0;
let finSimu = 900;
let proxLlegada = 20;
let proxFinServicio = 9999;
let proxDescanso = 94;
let proxTrabajo = 9999;
let deltaFinServicio = 40;
let deltaLlegada = 45;
let deltaDescansos = 60;
let deltaTrabajo = 30;
let atendidos = 0;
let ps = false;
let psStatus = true;
let i = 0;
let cicloServidor = 0;
let op = 0;


//Agregar la parte aleatoria al problema
console.log('Hora actual', convertir(tiempo));
console.log('Proxima llegada', convertir(proxLlegada));
console.log('Proximo fin de servicio', convertir(proxFinServicio));
console.log('Cola', q);
console.log('Puesto de servicio', ps);


while (i <= 10) {

    op = proximoEvento(proxLlegada,proxFinServicio,proxDescanso,proxTrabajo);
    switch (op) {
        case 1:
            llegada()
            console.log('-----------------------------------');
            console.log('LLEGADA')
            break;
        case 2:
            finServicio()
            console.log('-----------------------------------');
            console.log('FINSERVICIO')
            break;
        case 3:
            descanso()
            console.log('-----------------------------------');
            console.log('DESCANSO')
            break;
        case 4:
            trabajar()
            console.log('-----------------------------------');
            console.log('TRABAJO')
            break;        
        default:
            break;
    }




  console.log('-----------------------------------');
  console.log('Hora actual', convertir(tiempo));
  console.log('Proxima llegada', convertir(proxLlegada));
  console.log('Proximo fin de servicio', convertir(proxFinServicio));
  console.log('Cola', q);
  console.log('Atendiendo?', ps);
  console.log('Está el puesto de servicio?', psStatus);
  console.log('Proximo descanso', convertir(proxDescanso));
  console.log('Proxima vuelta al trabajo', convertir(proxTrabajo));
  i++;
  alert();
}

console.log('personas atendidas', atendidos);
console.log('Ciclos de descanso del servidor', cicloServidor);


function llegada() {
    tiempo = proxLlegada;
    if(psStatus){
        if(ps){
            q++;
            
        }else{
            ps = true;
            proxFinServicio = tiempo + deltaFinServicio
        }
    }else{
        q++;
    }
    proxLlegada = proxLlegada + deltaLlegada;
}

function finServicio() {
    tiempo = proxFinServicio;
    ps = false;
    atendidos ++;
    if(psStatus){
        if(q > 0){
            q -= 1;
            ps = true;
            proxFinServicio = tiempo + deltaFinServicio;
        }else{
            ps = false;
            proxFinServicio = 9999;
        }
    }else{
        proxFinServicio = proxFinServicio + deltaDescansos;
    }
}

function descanso() {
    
    tiempo = proxDescanso
    psStatus = false;
    proxTrabajo = proxDescanso + deltaDescansos;
    proxFinServicio = proxFinServicio + deltaDescansos;
    proxDescanso = 9999 //Numero muy alto simboliza que no hay descanso

}

function trabajar(){

    tiempo = proxTrabajo
    psStatus = true;
    proxDescanso = proxTrabajo + deltaTrabajo;
    cicloServidor ++;
    proxTrabajo = 9999;

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

function random(min, max) {

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