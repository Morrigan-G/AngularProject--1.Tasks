import { Injectable } from "@angular/core"
import type { NewAddCommentData } from "./task.window/TaskWindow.model"

@Injectable({providedIn:'root'})
export class TasksService{
  private tasks=[
  {
  id:'t1',
  userId: 'u1',
  title:'Strong and melodic',
  summary:'Popularity:The group gained popularity thanks to music videos on the Internet, singles that entered the Billboard charts, and their debut album Eternal Blue (2021).',
  dueDate: '2017-...'
} , 
{
  id:'t2',
  userId: 'u2',
  title:'The bands true adult sound',
  summary:'Five Finger Death Punch were awarded the prestigious «Soldier Appreciation Award» by the Association of the American Army. It is noteworthy that before them only Elvis Presley was awarded such an award.',
  dueDate: '2005-...'
} ,
{
  id:'t3',
  userId: 'u3',
  title:'Horror trap',
  summary:'Istasha The Scrub belongs to the alternative hip hop subgenre - which is notable for its experimental approach and mixing of different musical genres. Istasha The Scrub aims to create music that challenges traditional hip hop concepts and is unique.',
  dueDate: '2019-...'
}  ,
{
  id:'t4',
  userId: 'u4',
  title:'Made In Hell',
  summary:'He became famous after the release of the music video for the single «Heart Attack» in 2017',
  dueDate: '2013-...'
}  ,
{
  id:'t5',
  userId: 'u5',
  title:'Horror trap',
  summary:'Noname with strong scream content',
  dueDate: '2018-...'
}  ,
{
  id:'t6',
  userId: 'u6',
  title:'Classic metalcore',
  summary:'The album Lunar Strain was a significant success in the Swedish metal scene, as evidenced by positive reviews from music critics and the specialized press.',
  dueDate: '1990-'
} 
]

constructor(){
  const tasks = localStorage.getItem('tasks')

  if(tasks){
    this.tasks=JSON.parse(tasks)
  }
}

getUserTasks(userId:string){
  return this.tasks.filter((task) => task.userId === userId)
}

addCommit(taskData:NewAddCommentData, userId:string){
this.tasks.unshift({
  id:new Date().getTime().toString(),
  userId:userId,
  title:taskData.title,
  summary:taskData.summary,
  dueDate:taskData.date})
  this.saveTasks()
}

removeCommit(id:string){
this.tasks= this.tasks.filter((task) =>task.id !==id)
this.saveTasks()
}

private saveTasks(){
  localStorage.setItem('tasks',JSON.stringify(this.tasks))
}

}