import React, { Component } from "react";
import Card from "./Card";
import './Board.css';
import { render } from "@testing-library/react";



class Board extends React.Component{
 constructor (props){
    super (props);

    const fronts = [
        '❤️',
        '✨',
        '🐶',
        '🦝',
        '🐺',
        '🍂',
        '🧄',
        '🥰 ',
    ]
const deck = fronts
    .concat(fronts)
    .sort(() => Math.random() - 0.5)  //makes the deck shuffle
    .map (f => {
        return {
            content: f,
            faceUp: false,
        }
    })
    
    this.state = {
        deck: deck,
        firstCard: null,
    }
 }
    
 
 flip (cardIdx) {
     if (this.state.firstCard === null)
        this.setState({
            deck: this.state.deck.map((f, i) => {
                if (i === cardIdx){
                    return {
                        content: f.content,
                        faceUp: !f.faceUp,
                    } 
                }else{
                    return f;
                }
            })
        })
    }
    render (){
    return (
        this.state.deck.map((f, i) => {
            return ( 
                <div className="Board">  
                    <Card 
                    flip={() => {this.flip(i)}} 
                    content={f.content} 
                    faceUp={f.faceUp}/>
                </div>)
        })
    )
    }
}


export default Board;