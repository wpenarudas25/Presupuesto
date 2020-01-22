import { Egreso } from './egreso.model';

export class EgresoService{
    egresos: Egreso[] = [
        new Egreso("Renta departamento", 900),
        new Egreso("Ropa", 200)
    ]

    elimiar(egreso: Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }
}