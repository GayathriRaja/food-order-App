
import React, { Component, logErrorToMyService} from 'react'




class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
      // console.log("No Error");
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      logErrorToMyService(error, info);
      // console.log("Error");

    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Everything is all right time to attain success </h1>;
      }
      return this.props.children;
    }
  }

export default ErrorBoundary
