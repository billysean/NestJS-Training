/* eslint-disable prettier/prettier */
/* 
this will be useful for saving data in memory
  export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
  }
*/

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
