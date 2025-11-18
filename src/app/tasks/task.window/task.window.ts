import { Component,EventEmitter,Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import {type Task} from './TaskWindow.model'
import { Card } from "../../ui/card/card";
import { TasksService } from '../task.service';

@Component({
  selector: 'app-task',
  imports: [Card,DatePipe],
  templateUrl: './task.window.html',
  styleUrl: './task.window.css'
})
export class TaskWindow {
@Input({required:true}) task!: Task;
// @Output() complete = new EventEmitter<string>();

constructor(private tasksService:TasksService){}

onCompleteWindow() {
  // this.complete.emit(this.task.id);
  this.tasksService.removeCommit(this.task.id)
}
}
