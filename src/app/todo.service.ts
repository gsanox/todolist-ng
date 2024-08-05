import { Injectable } from "@angular/core";
import { Todo } from "./models/todo.model";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: "Buy groceries", description: "Milk, Bread, Cheese", completed: false },
    { id: 2, title: "Walk the dog", description: "Take the dog for a walk in the park", completed: false },
    { id: 3, title: "Read a book", description: 'Read "The Catcher in the Rye"', completed: false },
  ];

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  updateTodo(updatedTodo: Todo): void {
    const index = this.todos.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
