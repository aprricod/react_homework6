import React, { Fragment, Component } from "react";

const Tab1 = () => <h1>Text of Tab1</h1>;

const Tab2 = () => <h1>Text of Tab2</h1>;

const Tab3 = () => <h1>Text of Tab3</h1>;

export default class Variant3 extends Component {
  state = {
    activeTab: 1,
  };

  handleTab = (e) => {
    this.setState({
      activeTab: +e.target.getAttribute("data-name"),
    });
  };

  render() {
    console.log(this.state);
    const { activeTab } = this.state;
    return (
      <Fragment>
        <button data-name={1} onClick={this.handleTab}>
          Tab1
        </button>
        <button data-name={2} onClick={this.handleTab}>
          Tab2
        </button>
        <button data-name={3} onClick={this.handleTab}>
          Tab3
        </button>
        {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3 />}
        <div>
          {`Active tab is: ${
            activeTab === 1 ? "firt" : activeTab === 2 ? "second" : "third"
          }`}
        </div>
      </Fragment>
    );
  }
}
