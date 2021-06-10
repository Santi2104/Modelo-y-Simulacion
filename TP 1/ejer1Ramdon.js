//Problema 1: 
/*
Hora de inicio de la simulacion: 08:00 hrs
Hora de fin de la simulacion: 09:00 hrs
Personas en la cola: 3
Estado del servidor: 0 -> desocupado
Tiempo de arrivo de clientes: 45 segundos
Tiempo de fin de servicio: 40 segundos
*/

let q = 3;
let tiempo = 0;
let finSimu = 900;
let proxLlegada = 300;
let proxFinServicio = 180;
let deltaFinServicio = 0;
let deltaLlegada = 0;
let atendidos = 0;
let ps = true;
let i = 0




console.log('Hora Actual || Proxima llegada || Proximo fin de servicio || Cola ||  Puesto de servicio');
console.log(`${convertir(tiempo)}  ||  ${convertir(proxLlegada)}  ||  ${convertir(proxFinServicio)} || ${q} || ${ps}`);


while (i <= 15) {
  deltaLlegada = randomLlegada(20,50);
  deltaFinServicio = randomLlegada(10,50);
  //Determino el proximo evento
  if (proxLlegada <= proxFinServicio) {
    //Estamos en una llegada
    tiempo = proxLlegada;
    if (ps == false) {
      ps = true;
      proxFinServicio = tiempo + deltaFinServicio;
    } else {
      q += 1;
    }
    proxLlegada = tiempo + deltaLlegada;
  } else {
    //Estamos ante un fin de servicio
    tiempo = proxFinServicio;
    ps = false;
    atendidos += 1;
    if (q > 0) {
      q -= 1;
      ps = true;
      proxFinServicio = tiempo + deltaFinServicio;
    } else {
      ps = false;
      proxFinServicio = 9999;
    }
  }

  console.log('-----------------------------------');
  console.log('Hora Actual || Proxima llegada || Proximo fin de servicio || Cola ||  Puesto de servicio');
  console.log(`${convertir(tiempo)}  ||  ${convertir(proxLlegada)}  ||  ${convertir(proxFinServicio)} || ${q} || ${ps}`);
  i++;
  alert();
}

console.log('personas atendidas', atendidos);
//console.table(cola);



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



//console.log(convertir(3660));