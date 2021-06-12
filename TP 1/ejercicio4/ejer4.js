let qA = 0;
let qB = 1;
let tiempo = 0;
//let finSimu = 900;
let proxLlegadaA = 15;
let proxLlegadaB = 8;
let proxFinServicio = 9999;
let deltaFinServicio = 17;
let deltaLlegadaA = 27;
let deltaLlegadaB = 13;
let atendidos = 0;
let ps = false;
let i = 0;

//Colocar variables para contar cantidad de atendidos de clientes A y B
console.log('Hora actual', convertir(tiempo));
console.log('Proxima llegada CLIENTE A', convertir(proxLlegadaA));
console.log('Proxima llegada CLIENTE B', convertir(proxLlegadaB));
console.log('Proximo fin de servicio', convertir(proxFinServicio));
console.log('Cola cliente A', qA);
console.log('Cola cliente B', qB);
console.log('Puesto de servicio', ps);


while (i <= 15) {

    op = proximoEvento(proxLlegadaA,proxLlegadaB,proxFinServicio,9999);
    switch (op) {
        case 1:
            llegadaClienteA()
            console.log('-----------------------------------');
            console.log('LLEGADA CLIENTE A')
            break;
        case 2:
            llegadaClienteB()
            console.log('-----------------------------------');
            console.log('LLEGADA CLIENTE B')
            break;
        case 3:
            finServicio()
            console.log('-----------------------------------');
            console.log('FIN DE SERVICIO')
            break;
        case 4:
            if(proxLlegadaA == proxLlegadaB){
                llegadaClienteA()
            }else if(proxLlegadaA == proxFinServicio){
                llegadaClienteA();
            }else{
                finServicio();
            }
            
            console.log('-----------------------------------');
            console.log('Cuarta opcion')
            break;        
        default:
            break;
    }




  console.log('-----------------------------------');
  console.log('Hora actual', convertir(tiempo));
  console.log('Proxima llegada CLIENTE A', convertir(proxLlegadaA));
  console.log('Proxima llegada CLIENTE B', convertir(proxLlegadaB));
  console.log('Proximo fin de servicio', convertir(proxFinServicio));
  console.log('Cola cliente A', qA);
  console.log('Cola cliente B', qB);
  console.log('Atendiendo?', ps);
  i++;
  alert();
}


function llegadaClienteA() {

    tiempo = proxLlegadaA;
    if (ps == false) {
        ps = true;
        proxFinServicio = tiempo + deltaFinServicio;
    } else {
        qA += 1;
    }
    proxLlegadaA = tiempo + deltaLlegadaA;
}

function llegadaClienteB() {
    tiempo = proxLlegadaB;
    if (ps == false) {
        ps = true;
        proxFinServicio = tiempo + deltaFinServicio;
    } else {
        qB += 1;
    }
    proxLlegadaB = tiempo + deltaLlegadaB;

   /* if(qA > 0){
        ps = true;
        qA --;
        proxFinServicio = tiempo + deltaFinServicio;
    }else{
        tiempo = proxLlegadaB;
        if (ps == false) {
            ps = true;
            proxFinServicio = tiempo + deltaFinServicio;
        } else {
            qB += 1;
        }
        proxLlegadaB = tiempo + deltaLlegadaB;
    }*/

}

function finServicio() {
    tiempo = proxFinServicio;
    ps = false;
    atendidos += 1;
    if (qA > 0) {
        qA -= 1;
        ps = true;
        proxFinServicio = tiempo + deltaFinServicio;
    } else if(qB > 0){
        qB -= 1;
        ps = true;
        proxFinServicio = tiempo + deltaFinServicio;
    }else{
        ps = false;
        proxFinServicio = 9999; //Numero grande equivale a que no hay proximo fin de servicio
    }

    
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