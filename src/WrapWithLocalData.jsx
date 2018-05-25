import React, { Component } from "react";

export default (WrappedComponent, name) => {
  class localStorageActions extends Component {
    constructor() {
      super();
      this.saveData = this.saveData.bind(this);
      this.state = { data: null };
    }

    componentWillMount() {
      const data = localStorage.getItem(name);
      try {
        this.setState({ data: JSON.parse(data) });
      } catch (e) {
        this.setState({ data });
      }
    }

    saveData(data) {
      try {
        localStorage.setItem(this.name, JSON.stringify(data));
      } catch (e) {
        localStorage.setItem(this.name, `${data}`);
      }
    }

    render() {
      return (
        <WrappedComponent
          data={this.state.data}
          saveData={this.saveData}
          {...this.props}
        />
      );
    }
  }
  return localStorageActions;
};
