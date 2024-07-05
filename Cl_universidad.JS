export default class Cl_universidad{
    constructor(){
        this.contEst=0;
        this.mayor=0;
        this.auxNom="";
        this.acumEd=0.0;
        this.contF=0;
        this.contF18=0;
    }
    //metodos
    procesarEstudiante(e){
        this.contEst++;
        this.acumEd+= e.edad;
        if(e.edad>this.mayor){
            this.mayor=e.edad;
            this.auxNom=e.nom;
        }
        if(e.sex=="F") {
            this.contF++;
        }
        if(e.sex=="F" && e.edad>=18){
        this.contF18++;
        }
    }
    calcPorcF18(){
        return this.contF18/this.contF*100;
    }
    calcProm(){
        return this.acumEd/this.contEst
    }
}