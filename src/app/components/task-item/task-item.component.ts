import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tasks } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Tasks = TASKS[0];
  @Output() onDeleteTask: EventEmitter<Tasks> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Tasks> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Tasks){
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Tasks){
    this.onToggleReminder.emit(task);
  }

}
