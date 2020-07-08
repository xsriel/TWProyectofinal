import { MessageService } from './../../services/message.service';
import { ContactoService } from './../../services/contacto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-fomulario-contacto',
  templateUrl: './fomulario-contacto.component.html',
  styleUrls: ['./fomulario-contacto.component.css']
})
export class FomularioContactoComponent implements OnInit {

  FormData: FormGroup;

//  constructor(private builder: FormBuilder, private contacto: ContactoService) {}
constructor(private builder: FormBuilder, private message: MessageService) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])
    });
  }
/*
  onSubmit(FormData) {
    console.log(FormData);
    this.contacto.PostMessage(FormData).subscribe( response => {
      location.href = 'https://mailthis.to/confirm',
      console.log(response);
    }, error => {
      console.warn(error.responseText),
      console.log({error});
    });
  }
*/
  onSubmit(FormData) {
    console.log(FormData);
    this.message.sendMessage(FormData);
  }
}
