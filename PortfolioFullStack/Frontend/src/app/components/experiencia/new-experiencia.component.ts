import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from '../../services/s-experiencia.service';
import { Router } from '@angular/router';
import { Experiencia } from '../../Model/experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(data => {
      alert('Experiencia añadida');
      this.router.navigate(['']);
    }, err => {
      alert('Falló');
      this.router.navigate(['']);
    }
    )
  }
}
