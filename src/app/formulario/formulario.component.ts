import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo: string= "ingresoOperacion";
  descripcionTnput:string;
  valorInput: number;

  constructor(private ingresoService : IngresoService, 
    private egresoService : EgresoService) { }

  ngOnInit() {
  }

  tipoOperacion(evento){
    this.tipo = evento.target.value;
  }

  agregarValor(){
    if(this.tipo === "ingresoOperacion")
    this.ingresoService.ingresos.push(new Ingreso(this.descripcionTnput, this.valorInput))
    else
    this.egresoService.egresos.push(new Egreso(this.descripcionTnput, this.valorInput))
  }
}
