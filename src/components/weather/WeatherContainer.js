import React, { Component } from 'react'
import Temp from './Temp'
import Details from './Details'
import WeeklyForecast from './WeeklyForecast'

export default class WeatherContainer extends Component {
    state = {
        data:null
    }

    componentDidUpdate(prevProps) {
        if (prevProps.weatherData !== this.props.weatherData) {
            this.setState({data:this.props.weatherData})
        }
    }
    
    render() {
        if (this.state.data !== null) {
            const { data } = this.state.data.daily;
            return (
                <div>
                    <h2 style={{margin:'20px auto 0',textAlign:'center'}}>Al Wakrah</h2>
                    
                    <Temp                    
                        currentTemp={Math.floor(this.state.data.currently.temperature)} 
                        maxTemp={Math.floor(this.state.data.daily.data[0].temperatureHigh)} 
                        minTemp={Math.floor(this.state.data.daily.data[0].temperatureLow)} 
                        summary={this.state.data.currently.summary} 
                    />        
                    <Details
                        wind= {this.state.data.currently.windSpeed} 
                        humidity={this.state.data.currently.humidity * 100 + '%'}
                        uvindex={this.state.data.currently.uvIndex}
                    />
                    <WeeklyForecast 
                        firstNextDay={{
                            day:this.state.data.daily.data[1].time,
                            max:data[1].temperatureHigh,
                            min:data[1].temperatureLow
                        }} 
                        secondNextDay={{
                            day:this.state.data.daily.data[2].time,
                            max:data[2].temperatureHigh,
                            min:data[2].temperatureLow
                        }} 
                        thirdNextDay={{
                            day:this.state.data.daily.data[3].time,
                            max:data[3].temperatureHigh,
                            min:data[3].temperatureLow
                        }} 
                        fourthNextDay={{
                            day:this.state.data.daily.data[4].time,
                            max:data[4].temperatureHigh,
                            min:data[4].temperatureLow
                        }} 
                        fifthNextDay={{
                            day:this.state.data.daily.data[5].time,
                            max:data[5].temperatureHigh,
                            min:data[5].temperatureLow
                        }}
                    />
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
        
    }
}
