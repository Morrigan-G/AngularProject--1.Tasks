import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { NewAddCommentData} from '../task.window/TaskWindow.model';

@Component({
  selector: 'app-add-comment',
  imports: [FormsModule ],
  templateUrl: './add-comment.html',
  styleUrl: './add-comment.css'
})
export class AddComment {
  @Output() cancel = new EventEmitter<void>()
  @Output() add= new EventEmitter<NewAddCommentData>()
  
  
  enteredTitle= ''
  enteredSummary=''
  enteredDate=''
onCancel(){
this.cancel.emit()
}
onSubmit(){
this.add.emit({
  title: this.enteredTitle,
  summary:this.enteredSummary,
  date: this.enteredDate
})

}



}
