import { Component,Input } from "@angular/core";
import { HEADER_QUOTES } from '../music.names';



@Component({
 selector:'app-header',
 templateUrl:'./header.component.html',
 styleUrls:['./header.component.css']

})


export class HeaderComponent {
  


    @Input() quote!: string
    @Input() song!: string
    @Input() index!:number
    @Input() select!: (index:number) => void
   
//   onSelectName(){
// // const randomIndex = Math.floor(Math.random()*HEADER_QUOTES.length)
// // this.selectedName=HEADER_QUOTES[randomIndex]


// }

 
}