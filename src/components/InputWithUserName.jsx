import React from "react";
import PropTypes from "prop-types";
import wrapWithLocalData from "../WrapWithLocalData";

function InputWithUserName({ username }) {
  return <input value={username} />;
}
InputWithUserName.propTypes = {
  username: PropTypes.string.isRequired
};

export default wrapWithLocalData(InputWithUserName, "username");
