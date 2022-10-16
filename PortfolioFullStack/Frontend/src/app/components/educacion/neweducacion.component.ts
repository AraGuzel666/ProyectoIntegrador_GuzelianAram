import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../../services/educacion.service';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Model/educacion';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionService.save(educacion).subscribe(
      data => {
        alert("Educación añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
