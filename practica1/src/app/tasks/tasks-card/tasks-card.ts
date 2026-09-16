import { Component, input, numberAttribute, output } from '@angular/core';
import { statusLabel } from '../task-status';
import { TaskModel } from '../tasks.model';

@Component({
  imports: [],
  selector: 'app-tasks-card',
  styleUrl: './tasks-card.css',
  templateUrl: './tasks-card.html',
})
export class TasksCard {

  task = input.required<TaskModel>();

  compact = input(false);

  days = input.required<unknown, number>({transform:numberAttribute});

  size = input('md', {alias:'cardSize'});

  done = output<TaskModel>();

  deleted = output<number>();

  onDone(){this.done.emit(this.task());}
  
  onDelete(){this.deleted.emit(this.task().id);}
}
