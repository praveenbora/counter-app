import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  render() {
    // console.log("props", this.props);
    return (
      <div>
        <h4>{this.props.counter.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatValue()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.renderTags()}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src={this.state.imageUrl} alt=""></img>
      </div>
    );
    //this will generates React.createElement
  }

  //constructor() {
  //super();
  // console.log("in constructor ", this);
  //this.handleIncrement = this.handleIncrement.bind(this);
  //}
  //handleIncrement() {
  // handleIncrement = product => {
  // console.log(product);
  // this.setState({ value: this.state.value + 1 });
  // this.setState({
  //  imageUrl: (this.state.imageUrl =
  //   "https://picsum.photos/" + (200 + this.state.value))
  //});
  // };
  // "";
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatValue() {
    const { value } = this.props.counter;
    //return count == 0 ? <h1>zero</h1> : count;
    return value === 0 ? "zero" : value;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>no tags!!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
