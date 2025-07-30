import { Component,Input } from '@angular/core';
import { TaskWindow } from './task.window/task.window';

@Component({
  selector: 'app-tasks',
  imports: [TaskWindow],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
@Input() name?:string
}
