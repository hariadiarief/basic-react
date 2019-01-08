import React from "react";
import Child from "./Child";

class Mine extends React.Component {
  constructor() {
    super();
    this.state = { texts: [], color: "", counter: 0 };
    this.changeColor = this.changeColor.bind(this);
    this.counterClick = this.counterClick.bind(this);
  }

  // componentDidMount untuk set  nilai awal suatu state yang dimiliki oleh suatu component
  componentDidMount() {
    this.setState({
      texts: ["belajar react", "sungguh menyenangkan", "asik sekali"],
      color: "green"
    });
  }

  counterClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  changeColor() {
    if (this.state.color === "green") {
      this.setState({ color: "blue" });
    } else {
      this.setState({ color: "green" });
    }
  }

  render() {
    let texts = this.state.texts.map(function(text) {
      return <Child text={text} counterClick={this.counterClick} />;
    }, this);

    let style = { color: this.state.color };

    return (
      <div style={style} onClick={this.changeColor}>
        <div id="mine"> Hello World </div>
        <div> This is me, React wkwkwkw</div>
        {texts}
        {this.state.counter}
      </div>
    );
  }
}

export default Mine;
