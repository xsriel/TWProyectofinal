import { Component, OnInit } from '@angular/core';
import { Persona } from '../../modelo/persona';
import { PersonaService } from '../../servicios/persona.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personaList: Persona[];

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
  }

  onSubmit(personaForm: NgForm) {

    this.personaService.getPersona();

    

  }



}
