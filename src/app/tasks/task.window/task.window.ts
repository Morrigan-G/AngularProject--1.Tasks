import { Component,EventEmitter,Input, Output } from '@angular/core';
import {type Task} from './TaskWindow.model'
import { Card } from "../../ui/card/card";
@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.window.html',
  styleUrl: './task.window.css'
})
export class TaskWindow {
@Input({required:true}) task!: Task;
@Output() complete = new EventEmitter<string>();

onCompleteWindow() {
  this.complete.emit(this.task.id);
}
}
