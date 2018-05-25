import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "../../actions/Todos";

const propTypes = {
  dispatch: PropTypes.func.isRequired
};

function AddTodo({ dispatch }) {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          ref={ref => {
            this.input = ref;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

AddTodo.propTypes = propTypes;

export default connect()(AddTodo);
