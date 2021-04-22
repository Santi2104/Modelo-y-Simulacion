//let ps = true;
let q = 3;
let tiempo = 1;
let actual = 0;
let atendidos = 0;



while (tiempo <= 3600 ) {
    
    if(tiempo == 1)
    {
        q--; //Quitamos un cliente de la cola
        actual = 1; //El servidor comieza a atender
    }

    if(tiempo % 45 == 0) //Si pasaron 45 seg, llega un cliente a la fila
    {
        q++;
    }
    
    if(actual % 40 == 0)//Si pasaron 40 seg
    {
        atendidos ++;//Se termino de atender a un cliente
        q--;//Inmediatamente un cliente toma su lugar 
        actual = 1;//El servidor cominza a antender

    }
    //console.log(actual % 45);
    actual++; //Aumentamos el tiempo del servidor
    tiempo++;//Aumentamos el tiempo de la simulacion

}

console.log('personas atendidas', atendidos);
console.log('Personas en la cola', q);

    

    
