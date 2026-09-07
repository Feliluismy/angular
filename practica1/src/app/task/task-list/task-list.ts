import { Component, signal, computed} from "@angular/core";
import { TaskModel } from "../task.model";
import { statusLabel ,nextStatus} from "../task-status";

@Component({
    imports : [],
    selector :'app-task-list',
    styleUrl :'./task-list.css',
    templateUrl :'./task-list.html'
})

export class TaskList {
    task = signal<TaskModel[]>(
        [
            {id: 1, title: 'Cerrarbalance Q3', status:'pending', priority:2},
            {id: 2, title: 'Revisar prs', status:'in-progress', priority:1},
            {id: 3, title: 'Deploy v2', status:'done', priority:3},
            {id: 3, title: 'Armar presentacion', status:'in-progress', priority:1}
        ]
    );

    search = signal('');

    filtered = computed(()=>
    this.task().filter(t=>t.title.toLowerCase().includes(this.search().toLowerCase())));

    pending = computed(()=>
    this.task().filter(t=>t.status !== 'done').length);

    label = statusLabel;
    //toggle hace referencia a una actualizacion parcial

    toggle(task:TaskModel){
    this.task.update(list => list.map(t=>t.id === task.id ? {...t,status:nextStatus(t.status)}:t))
  }
}