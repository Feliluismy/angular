import { Component, signal, computed, inject} from "@angular/core";
import { RouterLink } from "@angular/router";
import { TaskModel } from "../tasks.model";
import { statusLabel ,nextStatus} from "../task-status";
import { TasksCard } from "../../tasks/tasks-card/tasks-card";
import { TaskStore } from "../../task.store";


@Component({
    imports : [RouterLink, TasksCard],
    selector :'app-task-list',
    styleUrl :'./task-list.css',
    templateUrl :'./task-list.html'
})

export class TaskList {

    private readonly store = inject(TaskStore)

    filter = signal('');

    task = computed(() => {//a medida que vamos escribiendo, esto va retornando
        const q = this.filter().toLowerCase();
        return this.store.tasks().filter(t => t.title.toLowerCase().includes(q));
    })

    markDone(task:TaskModel){
        this.store.update(task.id, {status:'done'})
    }
    remove(id:number){
        this.store.remove(id)
    }

    /*task = signal<TaskModel[]>(
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
    this.task.update(list => list.map(t=>t.id === task.id ? {...t,status:nextStatus(t.status)}:t));
  }*/
}