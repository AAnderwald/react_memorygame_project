import React, { Component } from "react";
import "./Card.css";

class Card extends React.Component {

        render()
        {
            let content;
            if(this.props.faceUp) {
               content = this.props.content;
            }
            return (
                <div onClick={this.props.flip} className={`Card ${this.props.faceUp ? 'face-up': ''}`} style={ this.props.faceUp ? {backgroundImage: `url(${content})`} : null }> 
            
                </div>  
            )
        }
}



export default Card;