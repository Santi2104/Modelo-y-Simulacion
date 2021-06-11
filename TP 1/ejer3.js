//Problema 2: 
let q = [];
let tiempo = 0;
let finSimu = 900;
let proxLlegada = 20;
let proxFinServicio = 9999;
let proxSalidaCola = 9999;
let deltaFinServicio = 0;
let deltaLlegada = 0;
let deltaSalidaCola = 0;
let atendidos = 0;
let ps = false;
let i = 0;


proxLlegada = randomLlegada(10,40);

console.log('Hora actual', convertir(tiempo));
console.log('Proxima llegada', convertir(proxLlegada));
console.log('Proximo fin de servicio', convertir(proxFinServicio));
console.log('Cola', q);
console.log('Puesto de servicio', ps);



while (i <= 13) {

    let op = proximoEvento(proxLlegada,proxFinServicio,proxSalidaCola,9999);
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
            salidaCola();
            console.log('-----------------------------------');
            console.log('SALIDA DE COLA', op);
            break;            
        default:
            if(proxLlegada == proxFinServicio){
              llegada();
            }else if(proxFinServicio == proxSalidaCola){
              finServicio();
            }else{
              salidaCola();
            }       
            console.log('-----------------------------------');
            console.log('SALIO POR EL BREAK', op) 
            break;
    }




  console.log('-----------------------------------');
  console.log('Hora actual', convertir(tiempo));
  console.log('Proxima llegada', convertir(proxLlegada));
  console.log('Proximo fin de servicio', convertir(proxFinServicio));
  console.log('Cola', q);
  console.log('Proxima salida de cola', convertir(proxSalidaCola));
  console.log('Puesto de servicio', ps);
  i++;
  alert();
}

console.log('personas atendidas', atendidos);


function llegada() {
    let aux = 0;
    tiempo = proxLlegada;
    if (ps == false) {
      ps = true;
      proxFinServicio = tiempo + deltaFinServicio;
    } else {
      q.push(tiempo);
      aux = tiempo + deltaSalidaCola;
      if(proxSalidaCola > aux){
        proxSalidaCola = Math.min(...q) + deltaSalidaCola;
      }
    }
    proxLlegada = tiempo + deltaLlegada;
    aux = 0;
}

function finServicio() {
    tiempo = proxFinServicio;
    ps = false;
    atendidos += 1;
    if (q.sort() != 0) {
      q.shift();
      ps = true;
      proxFinServicio = tiempo + deltaFinServicio;
      if(q.sort() == 0){
        proxSalidaCola = 9999;
      }else{
        proxSalidaCola = Math.min(...q) + deltaSalidaCola;
      }
      //proxSalidaCola = Math.min(...q) + deltaSalidaCola;
    } else {
      ps = false;
      proxFinServicio = 9999; //Numero grande equivale a que no hay proximo fin de servicio
    }
}

function salidaCola() {
    let min = Math.min(...q) + deltaSalidaCola;
    tiempo = proxSalidaCola;
    q.splice(q.indexOf(min,1));

    if(q.sort() == 0){
      proxSalidaCola = 9999;
    }else{
      proxSalidaCola = Math.min(...q) + deltaSalidaCola;
    }
    aux = 0;
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