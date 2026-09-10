import { TaskStatus} from './task-status'

//entidad central del domino
export interface TaskModel{
    id:number;
    title:string;
    status:TaskStatus; //objeto de 3 valores
    priority: 1 | 2 | 3; //sus valores solo pueden ser 1, 2 o 3
    assignee?: UserModel;
}

export interface UserModel{
    id:number;
    name:string;
}

//TaskDraft derivacion del modelo
//con Omit digo que el id se devecrear solo. le pido OMITIR este proceso de crearlo
export type TaskDraft = Omit<TaskModel , 'id'>;
export type TaskSumarry = Pick<TaskModel , 'id'|'title'>;
export type TaskPath = Partial<TaskModel>;//actualizacion parcial de nuestra tarea
export type StatusCode = Record<TaskStatus, number>;//tengo 5 tareas pendiented, esto devuelve 5

const t: TaskStatus = 'pending'