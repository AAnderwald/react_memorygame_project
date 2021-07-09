import React, { Component } from "react";
import "./Card.css";

function flip(card){

}

class Card extends React.Component {


    render(){
        let content;
        if(this.props.faceUp) {
           content = this.props.content;
        } else {
            content = 'Back'
        }
        return (
            <div onClick={this.props.flip} className={`Card ${this.props.faceUp ? 'face-up': ''}`} > 
            {content}
            </div>  
        )
    }
}




export default Card;