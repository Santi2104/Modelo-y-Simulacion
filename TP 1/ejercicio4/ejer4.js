document.getElementById("ejecutarCola").addEventListener('click', function(e) {
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
    let atendidosA = 0;
    let atendidosB = 0;
    let ps = false;
    let i = 0;
    let flag = false; //False = cliente b , True = cliente A


    console.log('Hora actual', convertir(tiempo));
    console.log('Proxima llegada CLIENTE A', convertir(proxLlegadaA));
    console.log('Proxima llegada CLIENTE B', convertir(proxLlegadaB));
    console.log('Proximo fin de servicio', convertir(proxFinServicio));
    console.log('Cola cliente A', qA);
    console.log('Cola cliente B', qB);
    console.log('Puesto de servicio', ps);
    pintarTabla(convertir(tiempo), convertir(proxLlegadaA), convertir(proxLlegadaB), convertir(proxFinServicio), qA, qB, ps)




    while (i <= 15) {

        op = proximoEvento(proxLlegadaA, proxLlegadaB, proxFinServicio, 9999);
        deltaLlegadaA = randomLlegadaA(30, 59);
        deltaLlegadaB = randomLlegadaB(5, 45);
        deltaFinServicio = randomFinServicio(15, 30);
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
                if (proxLlegadaA == proxLlegadaB) {
                    llegadaClienteA()
                } else if (proxLlegadaA == proxFinServicio) {
                    llegadaClienteA();
                } else {
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
        pintarTabla(convertir(tiempo), convertir(proxLlegadaA), convertir(proxLlegadaB), convertir(proxFinServicio), qA, qB, ps)


    }

    console.log('cantidad de clientes A atendidos', atendidosA);
    console.log('cantidad de clientes B atendidos', atendidosB);

    function pintarTabla(tiempo, proxLlegadaA, proxLlegadaB, proxFinServ, qA, qB, ps) {
        document.getElementById("tablaprueba").insertRow(-1).innerHTML =
            `<td>${tiempo}</td>
                   <td>${proxLlegadaA}</td>
                   <td>${proxLlegadaB}</td>
                   <td>${proxFinServ}</td>
                   <td>${qA}</td>
                   <td>${qB}</td>
                   <td>${ps}</td>
                   `;
    };

    function llegadaClienteA() {

        tiempo = proxLlegadaA;
        if (ps == false) {
            ps = true;
            flag = true;
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
            flag = false;
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
        //atendidos += 1;
        if (flag) {
            atendidosA++;
        } else {
            atendidosB++;
        }
        if (qA > 0) {
            qA -= 1;
            ps = true;
            flag = true;
            proxFinServicio = tiempo + deltaFinServicio;
        } else if (qB > 0) {
            qB -= 1;
            ps = true;
            flag = false;
            proxFinServicio = tiempo + deltaFinServicio;
        } else {
            ps = false;
            proxFinServicio = 9999; //Numero grande equivale a que no hay proximo fin de servicio
        }


    }

    function convertir(segundosP) {

        if (segundosP == null) {
            return `Sin hora disponible`;
        }

        const segundos = (Math.round(segundosP % 60));
        const horas = (Math.floor(segundosP / 3600)) + 8;
        const minutos = (Math.floor(segundosP / 60) % 60);

        //output.innerHTML = `<br>${horas} horas, ${minutos} minutos y ${segundos} segundos.`;
        return `${horas} horas, ${minutos} minutos y ${segundos} segundos.`;


    }

    function randomLlegadaA(min, max) {

        max += 1;
        return Math.floor(Math.random() * (max - min) + min);

    }

    function randomLlegadaB(min, max) {

        max += 1;
        return Math.floor(Math.random() * (max - min) + min);

    }

    function randomFinServicio(min, max) {

        max += 1;
        return Math.floor(Math.random() * (max - min) + min);

    }




    function proximoEvento(a, b, c, d) {

        if (a < b && a < c && a < d) {
            return 1;
        } else if (b < a && b < c && b < d) {
            return 2;
        } else if (c < a && c < b && c < d) {
            return 3;
        } else {
            return 4;
        }

    }
})