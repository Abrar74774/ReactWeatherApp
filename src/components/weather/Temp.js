import React from 'react';

const tempStyle = {
    color:'white',
    width:'75%',
    margin:'0 auto'
}

export default class Temp extends React.Component {
    render() {
        return(
            <div style={tempStyle}>
                <div style={{fontSize:'100px',textAlign:'center'}}>{this.props.currentTemp}&deg;c</div>
                <div style={{fontSize:'22px',textAlign:"center"}}>{this.props.maxTemp}&deg; / {this.props.minTemp}&deg;</div>
                <div style={{fontSize:'22px',textAlign:"center"}}>{this.props.summary}</div>
            </div>
        )
    }
}