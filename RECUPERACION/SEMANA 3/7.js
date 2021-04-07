function Fracciones() {
    var a, b;
    this.introducirFraccion = function (a, b) {
        if (!isNaN(a)) {
            this.a = a;
        } else {
            this.a = 0;
        }

        if (!isNaN(b)) {
            this.b = b;
        } else {
            this.b = 0;
        }
    }
    this.mcd = function (a, b) {
        this.a = a;
        this.b = b;
        let resultado, segundo;

        if (this.a % this.b === 0) {
            return b;
        } else {
            segundo = this.a % this.b;
            resultado = this.mcd(this.b, segundo);
            return resultado;
        }
    }
    this.mcm = function (a, b) {
        this.a = a;
        this.b = b;
        let resultado = a * b / mcd(a, b);
        return resultado;
    }
    this.getNumerador = function () {
        alert("El numerador es " + this.a);
    }
    this.getDenominador = function () {
        alert("El denominador es " + this.b);
    }
    this.setNumerador = function (a) {
        this.a = a;
    }
    this.setNumerador = function (b) {
        this.b = b;
    }
    this.cambiarFraccion = function (a, b) {
        this.a = a;
        this.b = b;
        alert(this.a + "/" + this.b);
    }
    this.toString = function () {
        alert(this.a + "/" + this.b);
    }
    this.simplificar = function () {
        let maxcom = this.mcd(a, b);
        let newA = a / maxcom;
        let newB = b / maxcom;
        let resultado = alert(newA + "/" + newB);
        return resultado;
    }
}