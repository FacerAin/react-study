import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
/*
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={ref => (this.ScrollBox = ref)}></ScrollBox>
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}
*/
class App extends Component {
  render() {
    return <IterationSample />;
  }
}
export default App;
