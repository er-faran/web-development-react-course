import { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return <div>Hi This is Class Component</div>;
  }
}
