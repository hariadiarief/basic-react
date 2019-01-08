import React from "react";
import Child from "./Child";

class Mine extends React.Component {
  constructor() {
    super();
    this.state = {
      texts: [],
      color: ""
    };
  }

  // componentDidMount untuk set  nilai awal suatu state yang dimiliki oleh suatu component
  componentDidMount() {
    this.setState({
      texts: ["belajar react", "sungguh menyenangkan", "asik sekali"],
      color: "blue"
    });
  }

  render() {
    let texts = this.state.texts.map(function(text) {
      return <Child text={text} />;
    });

    let style = { color: this.state.color };

    return (
      <div style={style}>
        <div id="mine"> Hello World </div>
        <div> This is me, React wkwkwkw</div>
        <Child text="Belajar" />
        <Child text="ReactJs" />
        <Child text="Mantab" />
        {texts}
      </div>
    );
  }
}

export default Mine;
