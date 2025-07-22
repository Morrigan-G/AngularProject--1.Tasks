import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Header/header.component';
import { Names } from "./names/names";
import{MUSIC_NAMES}from "./music.names"
import { HEADER_QUOTES } from './music.names';
import { Tasks } from './tasks/tasks';



 


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, Names,Tasks],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // protected title = 'angular-first-project';

musicGroups = MUSIC_NAMES
header = HEADER_QUOTES
selectedGroupId= 'u1'
selectedIndex = 0;

get selectUser(){
  return this.musicGroups.find((group)=> group.id===this.selectedGroupId)!
} 

  onSelectName(index: number) {
    this.selectedIndex = index;
  }

   onSelectGroup(id:string){
this.selectedGroupId= id

   }
}


