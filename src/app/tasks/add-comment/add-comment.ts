import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { NewAddCommentData} from '../task.window/TaskWindow.model';
import { TasksService } from '../task.service';

@Component({
  selector: 'app-add-comment',
  imports: [FormsModule ],
  templateUrl: './add-comment.html',
  styleUrl: './add-comment.css'
})
export class AddComment {
  @Input({required:true}) userId!:string
  @Output() close = new EventEmitter<void>()
  // @Output() add= new EventEmitter<NewAddCommentData>()

  enteredTitle= ''
  enteredSummary=''
  enteredDate=''
private tasksService = inject(TasksService)
 

onCancel(){
this.close.emit()
}
onSubmit(){
  this.tasksService.addCommit({
    title: this.enteredTitle,
    summary:this.enteredSummary,
    date: this.enteredDate
  }, this.userId)
  this.close.emit()
// this.add.emit({
//   title: this.enteredTitle,
//   summary:this.enteredSummary,
//   date: this.enteredDate
// })

}



}
