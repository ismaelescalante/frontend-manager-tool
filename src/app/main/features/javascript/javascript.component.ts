import { Component } from '@angular/core';
import { Task } from '../../../models/task.interface';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent {
  public tasks: Task[] | undefined;
  public todoTasks: Task[] = [];
  public inProgressTasks: Task[] = [];
  public toBeReviewedTasks: Task[] = [];
  public doneTasks: Task[] = [];
  public draggedTask: Task | undefined | null;

  ngOnInit() {
    this.tasks = [{ id: 1, name: 'Hola' }, { id: 2, name: 'Buenas' }];
  }

  dragStart(task: Task) {
    this.draggedTask = task;
  }

  drop(container: string) {
    if (this.draggedTask) {
      const draggedProductIndex = this.findIndex(this.draggedTask);
      if (container === 'todo') {
        this.todoTasks = [...this.todoTasks, this.draggedTask];
      } else if (container === 'inProgress') {
        this.inProgressTasks = [...this.inProgressTasks, this.draggedTask];
      } else if (container === 'toBeReviewed') {
        this.toBeReviewedTasks = [...this.toBeReviewedTasks, this.draggedTask];
      } else if (container === 'done') {
        this.doneTasks = [...this.doneTasks, this.draggedTask];
      }
      this.tasks = this.tasks?.filter((val, i) => i !== draggedProductIndex);
      this.draggedTask = null;
    }
  }

  dragEnd() {
    this.draggedTask = null;
  }

  findIndex(task: Task) {
    let index = -1;
    for (let i = 0; i < (this.tasks as Task[]).length; i++) {
      if (task.id === (this.tasks as Task[])[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }
}