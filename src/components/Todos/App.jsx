import React from "react";
import { Footer } from "./Footer";
import AddTodo from "../../containers/Todos/AddTodo";
import VisibleTodoList from "../../containers/Todos/VisibleTodoList";

export default function TodosApp() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}
