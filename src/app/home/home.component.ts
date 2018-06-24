import { Component, OnInit }      from '@angular/core';
import { Octavian, Note }         from 'octavian';
import { UserService }            from '../_services/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  midi;
  volume= 0;
  oscType = 'sine'
  gain: number;
  distortionAmount: number;
  note = new Note('A4');
  audioCtx = new (<any>window).AudioContext();
  oscillator = this.audioCtx.createOscillator();
  gainNode = this.audioCtx.createGain();
  distortion = this.audioCtx.createWaveShaper();
  filter = this.audioCtx.createBiquadFilter();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.checkLogin()
    // var auth = this.userService.authenticated;
    // var username = this.userService.user.username;
    if ((<any>window).navigator.requestMIDIAccess) {
      (<any>window).navigator.requestMIDIAccess({
        sysex: false
      }).then(this.onMIDISuccess, this.onMIDIFailure);
    } else {
      alert("No MIDI support in your browser.");
    }

    this.ChangeVolume(0);   //start it silent
    this.oscillator.type = this.oscType;
    this.oscillator.frequency.value = this.note.frequency; // value in hertz
    this.distortion.curve = this.MakeDistortion(1);
    this.filter.type = this.filter.LOWPASS;
    this.filter.frequency.value = 1000;
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.distortion);
    this.distortion.connect(this.filter);
    this.filter.connect(this.audioCtx.destination);
    this.oscillator.start();
  }
  ChangeFilter(value:number):void {
    this.filter.frequency.value = value;
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
    //console.log( "distortion changed to:" + curve );
  };

  onMIDISuccess(midiAccess):void {
    var midi = midiAccess;
    var inputs = midi.inputs.values();
    // loop through all inputs
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
        // listen for midi messages
        input.value.onmidimessage = this.midi;
        // this just lists our inputs in the console
        // listInputs(input);
    }
    // listen for connect/disconnect message
    midi.onratechange = onratechange;
}
 onMIDIFailure(e):void {
    console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + e);
}

}
