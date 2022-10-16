import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;
  constructor(private skills: SkillService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skills.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.skills.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar Skill");
        this.router.navigate(['']);
      }
    )
  }


}
