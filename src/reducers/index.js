import { combineReducers } from "redux";
import todos from "./Todos/todos";
import visibilityFilter from "./Todos/visibilityFilter";

export default combineReducers({
  todos,
  visibilityFilter
});
