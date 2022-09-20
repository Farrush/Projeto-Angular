import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferenciaModel';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  valor:number
  destino:number
  @Output() onSubmit = new EventEmitter<any>()

  constructor(private service: TransferenciaService, private router: Router){

  }

  transferir() {
    const valoresEmitidos: Transferencia = {valor: this.valor, destino: this.destino}
    //this.onSubmit.emit({valoresEmitidos})
    this.service.adicionar(valoresEmitidos).subscribe((resultado) =>{
      this.router.navigateByUrl('extrato')
      
    },(error) => console.log(error))
    
  }
  limparVariaveis(){
    this.destino = null
    this.valor = null
  }
}
