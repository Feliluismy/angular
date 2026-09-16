import { Routes } from '@angular/router';
import { TasksBoard } from './tasks/tasks-board/tasks-board';
import { TaskList } from './tasks/task-list/task-list';
import { TasksDetail } from './tasks/tasks-detail/tasks-detail';
import { TasksForm } from './tasks/tasks-form/tasks-form';

export const routes: Routes = [
    {path: '', pathMatch:'full', redirectTo:'board'},//principal
    {path:'board', component: TasksBoard},
    {path:'tasks', component: TaskList},
    {path:'tasks/new', component: TasksForm},
    {path:'tasks:/tasksId', component: TasksDetail},
    {path:'tasks:/tasksId/edit', component: TasksForm},
    {path:'**', redirectTo:'board'}
];
