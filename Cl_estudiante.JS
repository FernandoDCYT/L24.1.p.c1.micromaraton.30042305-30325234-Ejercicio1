export default class Cl_estudiante{
    constructor(nom, edad, sex){
        this.nom=nom;
        this.sex=sex;
        this.edad=edad;
    }
    set nom(n){
        this._nom=n;
    }
    set sex (s){
        this._sex=s;
    }
    set edad (e){
        this._edad=e;
    }
    get nom(){
        return this._nom
    }
    get sex(){
        return this._sex
    }
    get edad(){
        return this._edad;
    }
}