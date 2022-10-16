import { Component, OnInit } from '@angular/core';
import { Educacion } from '../../Model/educacion';
import { EducacionService } from '../../services/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {

  educacion: Educacion = null;

  constructor(private educacionS: EducacionService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
        alert("Educacion actualizada")
      }, err =>{
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }
}
