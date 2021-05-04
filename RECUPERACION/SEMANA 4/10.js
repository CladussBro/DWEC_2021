let array = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
let i = [];
var buscar=array.indexOf(3);
while(buscar != -1){
    i.push(buscar);
    buscar=array.indexOf(3,buscar +1);
}
alert(i);