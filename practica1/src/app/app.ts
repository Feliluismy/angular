import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
//import { TaskList } from './task/task-list/task-list';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('LUUUFY');
}
