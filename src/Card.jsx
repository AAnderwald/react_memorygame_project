import React, { Component } from "react";
import "./Card.css";

class Card extends React.Component {

    render(){
        let content;
        if(this.props.faceUp) {
           content = this.props.content;
        } else {
            content = 'Memory Game'
        }
        return (
            <div onClick={this.props.flip} className={`Card ${this.props.faceUp ? 'face-up': ''}`} > 
            {content}
            </div>  
        )
    }
}

export default Card;