import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoService } from './ingreso/ingreso.service';
import { EgresoService } from './egreso/egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Presupuesto App';

  ingresos: Ingreso [] = [];
  egresos: Egreso []= [];

  constructor(private ingresoService: IngresoService, egresoService: EgresoService) {
    this.ingresos = ingresoService.ingresos;
    this.egresos = egresoService.egresos;
  }

  getIngresoTotal(){
    let ingresoTotal: number = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    })
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal: number = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    })
    return egresoTotal;
  }

  getPorcentajeTotal(){    
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(){    
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}

