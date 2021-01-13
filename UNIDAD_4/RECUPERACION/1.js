let min = 1, max = 49;

function nums (min,max){
    return parseInt(Math.random()*(max-min)+min);
}

function loteria(){
    let valores = [];
    while (valores.length<6){
        const value = nums(min,max);
        if(valores.indexOf(value)<0)valores.push(value);
    }
    return valores;
}

for(let i=0; i<50;i++){
    const numsLoteria = loteria();
    console.log(numsLoteria);
}