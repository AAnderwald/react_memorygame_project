put a picture on these instead of a color.  if remember and see this later instead of the color of the card in card.css

props are the property of a component

<>this is a fragment and the one after the cards has to be at the end</>

this makes the color change from back of card to face of card.
 div className={`Card ${this.state.faceUp ? 'face-up': ''}`} onClick={this.flip.bind(this)}

 //cannot use class by itself because JavaScript has this already built in; when click it will toggle between front of card and back of card