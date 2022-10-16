import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../Model/experiencia';
import { SExperienciaService } from '../../services/s-experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(private sExperienciaService: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperienciaService.detail(id).subscribe(
      data => {
        this.expLab = data;
      }, err => {
        alert('Error al modificar Experiencia');
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperienciaService.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
        alert("Experiencia actualizada");
      }, err =>{
        alert('Error al modificar Experiencia');
        this.router.navigate(['']);
      }
    )
  }

}
