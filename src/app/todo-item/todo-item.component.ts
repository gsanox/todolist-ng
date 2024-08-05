import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Todo } from "../models/todo.model";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() updateTodoEvent = new EventEmitter<Todo>();
  @Output() deleteTodoEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  updateTodo() {
    console.log("Updating todo:", this.todo);
    this.updateTodoEvent.emit(this.todo);
  }

  deleteTodo() {
    console.log("Deleting todo:", this.todo);
    this.deleteTodoEvent.emit(this.todo.id);
  }
}
