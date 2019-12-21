import React from 'react';


export default class Temp extends React.Component {
    render() {
        return(
            <div className="tempStyle">
                <div className="temp">{this.props.currentTemp}&deg;c</div>
                <div className="others">{this.props.maxTemp}&deg; / {this.props.minTemp}&deg;</div>
                <div className="others">{this.props.summary}</div>
            </div>
        )
    }
}