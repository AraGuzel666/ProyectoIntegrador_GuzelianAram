import { Component, OnInit } from '@angular/core';
import { Persona } from '../../Model/persona.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../../services/persona.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: Persona = null;
  constructor(private activatedRoute: ActivatedRoute, private personaS: PersonaService, private router: Router, public imagenService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaS.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.persona.img = this.imagenService.url;
    this.personaS.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
        alert("Actualizado")
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = `perfil_${id}`;
    this.imagenService.uploadImage($event, name);
  }
}
