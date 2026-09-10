import { Component, input, numberAttribute, output } from '@angular/core';
import { TasksModel } from '../tasks-model/tasks-model';

@Component({
  imports: [],
  selector: 'app-tasks-card',
  styleUrl: './tasks-card.css',
  templateUrl: './tasks-card.html',
})
export class TasksCard {

  task = input.required<TasksModel>();

  compact = input(false);

  days = input.required<unknown, number>({transform:numberAttribute});

  size = input('md', {alias:'cardSize'});

  done = output<TasksModel>();

  deleted = output<number>();

  onDone().{this.done.emit(this.task)}

  outDone().{this.delete.emit(this.task)}
}
