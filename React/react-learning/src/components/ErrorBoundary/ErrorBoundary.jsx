/* eslint-disable react/prop-types */
import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError === true) {
      return <h1>Something went wrong! Please try again</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
