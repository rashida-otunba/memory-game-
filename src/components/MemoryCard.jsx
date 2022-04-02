import React from "react";
import "./MemoryCard.css";

class MemoryCard extends React.Component {
  constructor(props){
    super(props);
    this.state = { isFlipped: false }; //this lets the card know, the default state is false 
  }
    clickHandler(){
   this.setState({ isFlipped: !this.state.isFlipped });
   }

  render() {
      let memoryCardInnerClass='MemoryCardInner';
    return (
      <div className="MemoryCard" 
      onClick ={this.clickHandler.bind(this)}>
        <div className={!this.props.isFlipped ? memoryCardInnerClass : "MemoryCardInner flipped"}>
          <div className="MemoryCardBack">
            <img
              src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"
              alt="card"
            ></img>
          </div>
          <div className="MemoryCardFront">
          {this.props.symbol}
          </div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
