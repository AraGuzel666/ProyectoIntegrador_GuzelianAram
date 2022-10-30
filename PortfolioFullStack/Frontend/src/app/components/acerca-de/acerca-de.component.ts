import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Model/persona.model';
import { PersonaService } from '../../services/persona.service';
import { TokenService } from '../../services/token.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  
  persona: Persona = null;

  constructor(public personaService: PersonaService, private tokenService: TokenService, public imagenService: ImageService) { }
  
  isLogged = false;
  ngOnInit(): void {
      this.cargarPersona();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
      console.log(this.imagenService.url)
    }

    cargarPersona(){
      this.personaService.detail(1).subscribe(data =>{
        this.persona = data;
      })
    }
  }


