var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Note } from 'octavian';
var HomeComponent = (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.volume = 0;
        this.note = new Note('A4');
        this.audioCtx = new window.AudioContext();
        this.oscillator = this.audioCtx.createOscillator();
        this.gainNode = this.audioCtx.createGain();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.ChangeVolume(0);
        this.oscillator.type = 'sine';
        this.oscillator.frequency.value = this.note.frequency;
        this.oscillator.connect(this.gainNode);
        this.gainNode.connect(this.audioCtx.destination);
        this.oscillator.start();
    };
    HomeComponent.prototype.ChangeVolume = function (value) {
        this.gain = (value / 10);
        this.gainNode.gain.value = this.gain;
        console.log("Volume changed to:" + this.volume);
    };
    HomeComponent.prototype.ChangeNote = function (value) {
        this.note = new Note(value);
        this.oscillator.frequency.value = this.note.frequency;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [UserService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=../../../../src/app/home/home.component.js.map