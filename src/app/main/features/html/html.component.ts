import { Component, OnInit } from '@angular/core';

import { Task } from '../../../models/task.interface';

@Component({
  selector: 'app-itinerary',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss'],
})
export class HtmlComponent implements OnInit {
  public tasks: Task[] | undefined;
  public todoTasks: Task[] = [];
  public inProgressTasks: Task[] = [];
  public toBeReviewedTasks: Task[] = [];
  public doneTasks: Task[] = [];
  public draggedTask: Task | undefined | null;

  ngOnInit() {
    this.tasks = [
      { id: 1, name: 'Hola' },
      { id: 2, name: 'Buenas' },
    ];
  }

  dragStart(task: Task) {
    this.draggedTask = task;
  }

  drop(container: string) {
    if (this.draggedTask) {
      this.removeFromOriginalContainer(this.draggedTask);

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

  removeFromOriginalContainer(task: Task) {
    this.todoTasks = this.todoTasks.filter((t) => t.id !== task.id);
    this.inProgressTasks = this.inProgressTasks.filter((t) => t.id !== task.id);
    this.toBeReviewedTasks = this.toBeReviewedTasks.filter(
      (t) => t.id !== task.id
    );
    this.doneTasks = this.doneTasks.filter((t) => t.id !== task.id);
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