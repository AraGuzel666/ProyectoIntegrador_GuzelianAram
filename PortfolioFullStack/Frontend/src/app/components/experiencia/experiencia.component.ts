
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/Model/experiencia';
import { TokenService } from 'src/app/services/token.service';
import { SExperienciaService } from '../../services/s-experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

   isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => this.expe = data);
  }

  delete(id?: number): void{
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
          alert("Experiencia eliminada");
        }, err => {
          alert("No se pudo eliminar la experiencia");
        }
      )
    }
  }
}
