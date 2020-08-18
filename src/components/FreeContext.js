import React, { Component } from 'react'

class FreeContext extends Component {
    render() {
        return (
            <div className="free">
                <h5>Get Premium</h5>
                <p>Only $119/month after offer period. Cancel anytime. 
                    <span>Terms and conditions</span> apply.
                </p>
                <div className="small-bar">
                    <div style={{ color:"white", fontSize: 25 }}>Spotify Free</div>
                    <div style={{ fontSize: 15, color:'#fafafa', textTransform: 'uppercase'}}>Current Plan</div>
                </div>
            </div>
        )
    }
}

export default FreeContext
