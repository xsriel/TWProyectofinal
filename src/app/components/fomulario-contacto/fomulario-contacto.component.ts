import { MessageService } from './../../services/message.service';
// import { ContactoService } from './../../services/contacto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-fomulario-contacto',
  templateUrl: './fomulario-contacto.component.html',
  styleUrls: ['./fomulario-contacto.component.css']
})
export class FomularioContactoComponent implements OnInit {

  FormData: FormGroup;

  //  constructor(private builder: FormBuilder, private contacto: ContactoService) {}
  constructor(private builder: FormBuilder, private message: MessageService) { }

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

  public sendEmail(e: Event) {
    emailjs.sendForm('gmail', 'template_RhlQc1oy', e.target as HTMLFormElement, 'user_zZPVWr5nS5Y30zEuwtRMz')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  onSubmit(FormData) {
    console.log(FormData);
    this.message.sendMessage(FormData);
  }
}
