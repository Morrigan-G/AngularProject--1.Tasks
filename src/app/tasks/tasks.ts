import { Component,Input } from '@angular/core';
import { TaskWindow } from './task.window/task.window';
import { AddComment } from "./add-comment/add-comment";
import { type NewAddCommentData } from './task.window/TaskWindow.model';
import { TasksService } from './task.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskWindow, AddComment],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
@Input({required:true}) userId!:string
@Input({required:true}) name!:string;
isAddingComment=false;
// private tasksService: TasksService

constructor(private tasksService:TasksService){
  // this.tasksService=tasksService

}

get selectedUserTasks(){
  return this.tasksService.getUserTasks(this.userId) }

// onCompleteWindow(id: string){
// }

onAddComment(){
this.isAddingComment=true
}
onCloseComment(){
  this.isAddingComment=false;
}

// onAddCommentDate(taskData: NewAddCommentData){

// this.isAddingComment=false
// }


}
  