import { Component,Input, input,computed, Output, EventEmitter,output } from '@angular/core';
// import { MUSIC_NAMES } from '../music.names';



// const randomIndex = Math.floor(Math.random()*HEADER_QUOTES.length)

@Component({
  selector: 'app-names',
  imports: [],
  templateUrl: './names.html',
  styleUrl: './names.css'
})
export class  Names {
@Input({required:true}) user!: {
  id:string;
  avatar: string;
  name:string;
}
@Input({required:true}) index!:number
@Input({required:true}) select!: (index:number) => void
@Output() taskSelected= new EventEmitter<string>()
// taskSelected=output<string>()

// avatar=input.required<string>()
// name=input.required<string>()
// index=input.required<number>()
// select =input.required<(index:number) => void>()


// selectedName = HEADER_QUOTES[randomIndex]

// imagePath=computed(()=> '/MusicGroups/' + this.selectedName().avatar() ) // способ через сигнал

// imagePath = computed(()=>/MusicGroups/ + this.avatar()) //через инпут сигнал

get imagePath(){
  return '/MusicGroups/' + this.user.avatar
} // способ через геттер

onClick(){
  // if(this.select){
    this.select(this.index)
  this.taskSelected.emit(this.user.id)
  // this.select()(this.index())
}
  


// onSelectName(){
// // const randomIndex = Math.floor(Math.random()*HEADER_QUOTES.length)
// // this.selectedName=HEADER_QUOTES[randomIndex]

// }


}
