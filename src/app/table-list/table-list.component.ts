import { Component, OnInit } from '@angular/core';
import { SpeechService } from '../services/speech.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  


  title = 'pruebaSpeak-TTS';

  index: number;
  v: number = this.getVolume();
  speechData: any;
  
  ngOnInit(){
    console.log('onInit');
  }

  constructor(private spk: SpeechService){
    console.log('constructor');
  }

  start(html){
    this.spk.start(html); 
  }
  pause(){
    this.spk.pause();
  }
  resume(){
    this.spk.resume();
  }

  getSpeechData(){    
    this.speechData = this.spk.speechData;
    console.log(this.speechData);
  }

  setVolume(v){
    this.spk.setVolume(v);
  }

  getVolume(){
    return this.spk.getVolume();
  }

  setLanguage(lang){
    this.spk.setLanguage(lang);
  }
}
