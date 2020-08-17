import React, { Component } from 'react'

class Cards extends Component {
    
    render() {
    
    const { cardData } = this.props
    console.log(cardData.top);
    
        return (
            <div className="mainCard">
            <div className="uiCard" style={{ background:cardData.background }}>
                <div className="card-start">
                    <div className="card-head"> {cardData.cardhead} </div>
                    <div className="card-plan">
                        <p className="top"> {cardData.top} </p>
                        <p className="bottom" style={{textTransform:'uppercase', color:'rgba(255,255,255,0.75)', fontSize: 12, textAlign: 'right'}} > {cardData.bottom} </p>
                    </div>
                </div>
                <div className="card-terms">
                    <p> {cardData.terms} </p>
                </div>
                <div className="card-btn">
                    <button> {cardData.button} </button>
                </div>
                <div className="card-price">
                    {cardData.price}                    
                   <p> <span> Terms and conditions</span> apply </p> 
                </div>
            </div>
            </div>
        )
    }
}

export default Cards
