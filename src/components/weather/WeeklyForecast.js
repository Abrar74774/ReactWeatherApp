import React, { Component } from 'react'

export default class WeeklyForecast extends Component {
    

    epochToDay = (time) => {
        const date = new Date(time * 1000);
        const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

        const index = date.getDay();
        return days[index];
    }
    render() {
        
        return (
            <div className='details'>
                <div>
                    <i className='fas fa-sun'></i><br/>
                    <span>{Math.floor(this.props.firstNextDay.max)}&deg;/{Math.floor(this.props.firstNextDay.min)}&deg;</span><br/>
                    <span>{this.epochToDay(this.props.firstNextDay.day)}</span>
                </div>
                <div>
                    <i className='fas fa-sun'></i><br/>
                    <span>{Math.floor(this.props.secondNextDay.max)}&deg;/{Math.floor(this.props.secondNextDay.min)}&deg;</span><br/>
                    <span>{this.epochToDay(this.props.secondNextDay.day)}</span>
                </div>
                <div>
                    <i className='fas fa-sun'></i><br/>
                    <span>{Math.floor(this.props.thirdNextDay.max)}&deg;/{Math.floor(this.props.thirdNextDay.min)}&deg;</span><br/>
                    <span>{this.epochToDay(this.props.thirdNextDay.day)}</span>
                </div>
                <div>
                    <i className='fas fa-sun'></i><br/>
                    <span>{Math.floor(this.props.fourthNextDay.max)}&deg;/{Math.floor(this.props.fourthNextDay.min)}&deg;</span><br/>
                    <span>{this.epochToDay(this.props.fourthNextDay.day)}</span>
                    </div>
                <div>
                    <i className='fas fa-sun'></i><br/>
                    <span>{Math.floor(this.props.fifthNextDay.max)}&deg;/{Math.floor(this.props.fifthNextDay.min)}&deg;</span><br/>
                    <span>{this.epochToDay(this.props.fifthNextDay.day)}</span>
                    </div>
            </div>
        )
    }
}
