import React, { Component } from "react";

import image1 from "../assets/img/card1.jpg";
import image2 from "../assets/img/card2.jpg";
import image3 from "../assets/img/card3.jpg";

import Card from "./Card";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropped: true,
      card: {
        title: "title 1",
        description: "description 1",
        image: image1
      }
    };
    this.onDropDownHeaderDivClick = this.onDropDownHeaderDivClick.bind(this);
    this.onDropDownElementDivClick = this.onDropDownElementDivClick.bind(this);
  }

  onDropDownHeaderDivClick() {
    // let isDropped = this.state.isDropped;
    // let newState = { isDropped: !isDropped };
    // this.setState(newState);

    this.setState({ isDropped: !this.state.isDropped });
  }

  onDropDownElementDivClick(title, description, image) {
    this.setState({
      card: { title: title, description: description, image: image }
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="drop-down">
          <div
            onClick={this.onDropDownHeaderDivClick}
            className="drop-down-element drop-down-header"
          >
            drop down
          </div>
          <div
            className={
              this.state.isDropped == true
                ? "drop-down-list"
                : "drop-down-list hidden"
            }
          >
            <div
              onClick={() => {
                this.onDropDownElementDivClick(
                  "title 1",
                  "description 1",
                  image1
                );
              }}
              className="drop-down-element"
            >
              option1
            </div>
            <div
              onClick={() => {
                this.onDropDownElementDivClick(
                  "title 2",
                  "description 2",
                  image2
                );
              }}
              className="drop-down-element"
            >
              option2
            </div>
            <div
              onClick={() => {
                this.onDropDownElementDivClick(
                  "title 3",
                  "description 3",
                  image3
                );
              }}
              className="drop-down-element"
            >
              option3
            </div>
          </div>
        </div>
        <Card
          title={this.state.card.title}
          description={this.state.card.description}
          image={this.state.card.image}
        />
      </React.Fragment>
    );

    // if (this.state.isDropped) {
    //   return <div>hello yes</div>;
    // } else {
    //   return <div>hello no</div>;
    // }
  }
}

export default Main;
