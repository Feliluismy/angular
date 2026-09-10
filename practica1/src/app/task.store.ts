import { Injectable, signal } from "@angular/core";
import { TaskModel } from "./task/task.model";
 
@Injectable({ providedIn: 'root' })
export class TaskStore {
    readonly tasks = signal<TaskModel[]>([
        {
            id: 1,
            title: "cerrar balance del q3",
            status: "pending",
            priority: 2
        },
        {
            id: 2,
            title: "cerrar balance del q3",
            status: "pending",
            priority: 2
        },
        {
            id: 3,
            title: "cerrar balance del q3",
            status: "pending",
            priority: 2
        },
        {
            id: 4,
            title: "cerrar balance del q3",
            status: "pending",
            priority: 2
        }
    ]);
 
    find(id: number): TaskModel | undefined {
        return this.tasks().find(t => t.id === id);
    }
 
    add(draft: Omit<TaskModel, 'id'>): TaskModel {
        const id = Math.max(0, ...this.tasks().map(t => t.id)) + 1;
        const newTask: TaskModel = { id, ...draft };
 
        this.tasks.update(list => [...list, newTask]);
        return newTask;
    }
 
    update(id: number, path: Partial<TaskModel>): void {
        this.tasks.update(list =>
            list.map(t => (t.id === id ? { ...t, ...path } : t))
        )
    }
    remove(id:number): void{
        this.tasks.update(list => list.filter(t => t.id !== id));
    }
}