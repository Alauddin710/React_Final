import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: "World!" };
    console.log("LifeCycle is just started");
  }

  UNSAFE_componentWillMount() {
    console.log("LifeCycle Will Mount");
  }

  componentDidMount() {
    console.log("LifeCycle Did Mount");
  }

  changeState() {
    this.setState({ hello: "Geek!" });
  }

  render() {
    console.log("LifeCycle Rendered");
    return (
      <div className="col-sm-8">
        <h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>
        <h2>
          <a
            className="btn btn-success btn-lg"
            onClick={this.changeState.bind(this)}
          >
            Press Here!
          </a>
        </h2>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}

export default LifeCycle;
