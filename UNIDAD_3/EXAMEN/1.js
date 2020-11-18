function Bandeja(){
    this.tipo=["caracola","tocinoCielo","riñoncitos","milhojas"];
    this.variedad="";
    this.cantidad=0;
    this.hora_elaboracion=0;
    this.hora_venta_ultimo_pastel=0;

    this.pasteles=function(caracolas,tocinoCielo,riñoncitos,milhojas){
        this.caracolas=caracolas;
        this.tocinoCielo=tocinoCielo;
        this.riñoncitos=riñoncitos;
        this.milhojas=milhojas;
    }

    this.setTipo=function(tipo){
        this.tipo=tipo;
    }
    this.setVariedad=function(variedad){
        this.variedad=variedad;
    }
    this.setCantidad=function(cantidad){
        this.cantidad=cantidad;
    }
    this.setHoraElab=function(hora_elaboracion){
        this.hora_elaboracion=hora_elaboracion;
    }
    this.setHora_venta_ultimo_pastel=function(hora_venta_ultimo_pastel){
        this.hora_venta_ultimo_pastel=hora_venta_ultimo_pastel;
    }
    this.tiempo_venta=function(){
        if(this.hora_elaboracion < this.hora_venta_ultimo_pastel) {
            return alert("Hora correcta");
        } else {
            return alert("Hora incorrecta");
        }
    }
}
function LaPlata(){
    this.mostrador=[];

    this.getPoner_en_mostrador=function(){
        return this.mostrador;
    }
    this.getVender_pastel=function(){
        return 
    }
}

let bandeja_completa = new LaPlata();

for (let i = 0; i < 10; i++) {
    let pastel = new Bandeja();
    Bandeja.setTipo();
    Bandeja.setHoraElab(11);
    Bandeja.setHora_venta_ultimo_pastel(12);
    LaPlata.addPastel(pastel);
}

LaPlata.getPoner_en_mostrador()[0].setHoraElab(13);
LaPlata.getPoner_en_mostrador()[0].tiempo_venta();

LaPlata.getPoner_en_mostrador()[0].setHora_venta_ultimo_pastel(14);
LaPlata.getPoner_en_mostrador()[0].tiempo_venta();