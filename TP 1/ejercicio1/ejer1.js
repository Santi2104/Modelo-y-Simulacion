document.getElementById("ejecutarCola").addEventListener('click', function (e) {

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
    let deltaFinServicio = 40
    let deltaLlegada = 45
    let atendidos = 0;
    let ps = true;
    let i = 0

    console.log('Hora Actual || Proxima llegada || Proximo fin de servicio || Cola ||  Puesto de servicio');

    console.log(`${convertir(tiempo)}  ||  ${convertir(proxLlegada)}  ||  ${convertir(proxFinServicio)} || ${q} || ${ps}`);
    pintarTabla(convertir(tiempo), convertir(proxLlegada), convertir(proxFinServicio), q, ps)
    //`${horas} horas, ${minutos} minutos y ${segundos} segundos.`;

    while (i <= 10) {

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
                proxFinServicio = 9999; //Numero grande equivale a que no hay proximo fin de servicio
            }
        }

        console.log('-----------------------------------');
        console.log(`${convertir(tiempo)}  ||  ${convertir(proxLlegada)}  ||  ${convertir(proxFinServicio)} || ${q} || ${ps}`);
        i++;
        pintarTabla(convertir(tiempo), convertir(proxLlegada), convertir(proxFinServicio), q, ps)
    }

    console.log('personas atendidas', atendidos);
    //console.table(cola);
});


function convertir(segundosP) {

    const segundos = (Math.round(segundosP % 60));
    const horas = (Math.floor(segundosP / 3600)) + 8;
    const minutos = (Math.floor(segundosP / 60) % 60);

    //output.innerHTML = `<br>${horas} horas, ${minutos} minutos y ${segundos} segundos.`;
    return `${horas}:${minutos}:${segundos}`;


}

pintarTabla = (tI, tL, tF, c, eS) => {
  document.getElementById("tablaprueba").insertRow(-1).innerHTML = 
                `<td>${tI}</td>
                 <td>${tL}</td>
                 <td>${tF}</td>
                 <td>${c}</td>
                 <td>${eS}</td>`;
};