import { Component, OnInit }      from '@angular/core';
import { UserService }            from '../_services/user.service';
import { Octavian, Note }               from 'octavian';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  volume= 0;
  gain: number;
  note = new Note('A4');
  audioCtx = new (<any>window).AudioContext();
  oscillator = this.audioCtx.createOscillator();
  gainNode = this.audioCtx.createGain();

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {

    this.ChangeVolume(0);   //start it silent
    this.oscillator.type = 'sine';
    this.oscillator.frequency.value = this.note.frequency; // value in hertz
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);
    this.oscillator.start();

  }
  ChangeVolume(value:number):void {
    this.gain = (value/10);
    this.gainNode.gain.value = this.gain;
    console.log( "Volume changed to:" + this.volume );
  }
  ChangeNote(value:string):void{
    this.note = new Note(value);
    this.oscillator.frequency.value = this.note.frequency;

  }



}
