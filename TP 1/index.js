let cola = [1,2,3];
let tiempo = 1;
let tiempo_servidor = 0;
let atendidos = 0;

//Problema 1: 

while (tiempo <= 3600 ) {
    
    if(tiempo == 1)
    {

        cola.shift();//Quitamos un cliente de la cola
        tiempo_servidor = 1; //El servidor comieza a atender
    }

    if(tiempo % 45 == 0) //Si pasaron 45 seg, llega un cliente a la fila
    {
        if(cola.sort == 0){ //si la cola esta vacia, hacemos como que agregamos y ahi no mas lo mandamos al servidor
            tiempo_servidor = 1; //Servidor comienza a atender
        }else{  //Si no esta vacia, agregamos un cliente normalmente
            cola.push(tiempo);
        }
        
    }
    
    if(tiempo_servidor % 40 == 0 && cola.sort() != 0)//Si pasaron 40 seg y la cola no esta vacia
    {
        atendidos ++;//Se termino de atender a un cliente
        cola.shift();//Inmediatamente un cliente toma su lugar 
        tiempo_servidor = 1;//El servidor cominza a antender

    }

    tiempo_servidor++; //Aumentamos el tiempo del servidor
    tiempo++;//Aumentamos el tiempo de la simulacion

}

console.log('personas atendidas', atendidos);
console.table(cola);