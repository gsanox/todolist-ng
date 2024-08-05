import { Component, OnInit } from "@angular/core";
import { Todo } from "../models/todo.model";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  newTodo: Todo = { id: 0, title: "", description: "", completed: false };

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    console.log("Adding new todo:", this.newTodo);
    this.newTodo.id = this.todos.length + 1;
    this.todoService.addTodo(this.newTodo);
    this.newTodo = { id: 0, title: "", description: "", completed: false };
  }

  updateTodo(todo: Todo): void {
    console.log("Updating todo:", todo);
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo);
    this.todoService.getTodos();
  }

  deleteTodo(id: number): void {
    console.log("Deleting todo with id:", id);
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }
}
