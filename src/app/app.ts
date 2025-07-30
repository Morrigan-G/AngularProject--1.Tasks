import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Header/header.component';
import { Names } from "./names/names";
import{HeaderQuote, MUSIC_NAMES, SelectedMusicGroup}from "./music.names"
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
selectedGroupId?:string
selectedMusicGroup?:SelectedMusicGroup = MUSIC_NAMES[0];
selectedGroupQuote?:HeaderQuote =HEADER_QUOTES.find((q) => q.groupId===this.selectedMusicGroup?.id) ;



// get selectUser(){
//   return this.musicGroups.find((group)=> group.id===this.selectedGroupId)!
// } 

  // onSelectName(index: number) {
  //   this.selectedIndex = index;
  // }

   onSelectGroup(id:string){
    this.selectedGroupId= id
    this.selectedGroupQuote=HEADER_QUOTES.find((q) => q.groupId===id)
    this.selectedMusicGroup=MUSIC_NAMES.find((t) => t.id===id)
   }
  //  onClickQuotes(id:string){
  //   this.selectedGroupId = id
  //   console.log("123412")
  //  }
}


