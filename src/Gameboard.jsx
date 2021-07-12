import React, { Component } from "react";
import Card from "./Card";
import './Gameboard.css';
import { render } from "@testing-library/react";
import "./Gameboard.css";

class Gameboard extends React.Component {
 constructor (props) {
    super (props)

    const fronts = 
    [
       "./1_donnakeep.jpg",
       "./2_rose.jpg",
       "./3_marthakeep.jpg",
       "./4_mickeyuse.jpg",
       "./5_river.jpg",
       "./6_jack.jpg",
       "./7_sara.jpg",
       "./8_daleks.jpg",
       "./9_sonicscrewdriver.jpg",
       "./10_insidetardis.jpg",
       "./12_drwho.jpg",
       "./13_jackie.jpg",
    
    ]

    

    const deck = fronts
        .concat(fronts)
        .sort(() => Math.random() - 0.5) 
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


    flipCardTo (cardIdx, faceUp) {
        this.setState({
            deck: this.state.deck.map((f, i) => {
                if (i === cardIdx) {
                    return {
                        content: f.content,
                        faceUp: !f.faceUp,
                    } 
                } else {
                  return f;
                }
            })
        })
    }

    flip (cardIdx) {
        if (this.state.firstCard === null) {
            this.setState({ firstCard: cardIdx });
        } else {
            const firstCardContent = this.state.deck[this.state.firstCard].content;
            const secondCardContent = this.state.deck[cardIdx].content;
            if(firstCardContent === secondCardContent){
                this.setState ({firstCard: null});
            } else {
                setTimeout(() =>{
                    this.flipCardTo (this.state.firstCard, false)
                    this.flipCardTo (cardIdx, false)
                    this.setState ({firstCard: null});
                }, 1000)
            }
        }
        this.flipCardTo(cardIdx, !this.state.deck[cardIdx].faceUp)
    }

    render () {
        return (
        this.state.deck.map((f, i) => {
      
            return ( <div className="Board" >  
                <Card 
                    flip={() => {this.flip(i)}} 
                    content={f.content} 
                    faceUp={f.faceUp}/>
                </div>)
           })
        )
    }
}

export default Gameboard;