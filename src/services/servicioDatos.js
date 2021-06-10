class ServicioDatos {
    indicadores
    indicadorDolar
    indicadorUF
    constructor (){
        this.indicadores= "https:/mindicador.cl/api";
        this.indicadorDolar= "https:/mindicador.cl/api/dolar/2021";
        this.indicadorUF= "https:/mindicador.cl/api/uf/2021";
    }
    //trae la info del usuario enrolado
    getIndicadores() {
        let self = this;
        return fetch(self.indicadores);
    }
    getIndicadorDolar() {
        let self = this;
        return fetch(self.indicadorDolar);
    }
    getIndicadorUF() {
        let self = this;
        return fetch(self.indicadorUF);
    }    
}
export default ServicioDatos