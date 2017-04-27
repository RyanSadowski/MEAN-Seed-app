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
  oscType = 'sine'
  gain: number;
  note = new Note('A4');
  audioCtx = new (<any>window).AudioContext();
  oscillator = this.audioCtx.createOscillator();
  gainNode = this.audioCtx.createGain();
  distortion = this.audioCtx.createWaveShaper();

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {

    this.ChangeVolume(0);   //start it silent
    this.oscillator.type = this.oscType;
    this.oscillator.frequency.value = this.note.frequency; // value in hertz
    this.distortion.curve = this.MakeDistortion(3);
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.distortion);
    this.distortion.connect(this.audioCtx.destination);
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
  ChangeWaveForm(value:string):void{
    this.oscType = value;
    this.oscillator.type = this.oscType;
  }
  MakeDistortion( amount ) {
    var k = typeof amount === 'number' ? amount : 50;
    var  n_samples = 44100;
    var curve = new Float32Array(n_samples);
    var deg = Math.PI / 180;
    var i = 0;
    var x;
    for ( ; i < n_samples; ++i ) {
      x = i * 2 / n_samples - 1;
      curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
    }
    this.distortion.curve = curve;
};

}
