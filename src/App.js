import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import { HashRouter, Route } from 'react-router-dom';
import WeatherContainer from './components/weather/WeatherContainer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fetchedData: null,
      city:''
    };
  }

  setStateFunc = (object) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/daa05a8769cd76b841d05acdc43f09cf/${object.coords.y},${object.coords.x}?units=ca`)
     .then(res => res.json())
     .then(data => this.setState({fetchedData:data,city:object.city}));
    setTimeout(() => {
      console.log(this.state);
    }, 2000);
  }

   
  render() {
    console.log(this.state)
    return (
      <HashRouter basename='/'>
        <div className="container">
          <Header />
          <Route exact path="/" render={props =>
            <Search {...props} dataFromSearch={this.setStateFunc}/>
          }/>
          <Route path='/weather' render={props =>(
            <WeatherContainer {...props} weatherData={this.state.fetchedData} cityName={this.state.city}/>
          )} />
          
        </div>
      </HashRouter>     
    );
  }
}

export default App;
