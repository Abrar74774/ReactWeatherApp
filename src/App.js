import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import { BrowserRouter, Route } from 'react-router-dom';
import WeatherContainer from './components/weather/WeatherContainer';


const container = {
  height:'700px',
  width:'450px',
  background:'#2fafff',
  margin:'40px auto',
  padding:'20px',
  borderRadius:'25px'
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fetchedData: null,
    };
  }

  setStateFunc = (object) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/daa05a8769cd76b841d05acdc43f09cf/${object.y},${object.x}?units=ca`)
     .then(res => res.json())
     .then(data => this.setState({fetchedData:data}));
    setTimeout(() => {
      console.log(this.state);
    }, 2000);
  }

   
  render() {
    console.log(this.state)
    return (
      <BrowserRouter>
        <div style={container}>
          <Header />
          <Route exact path='/' render={props =>
            <Search {...props} coords={this.setStateFunc}/>
          }/>
          <Route path="/weather" render={props =>(
            <WeatherContainer {...props} weatherData={this.state.fetchedData}/>
          )} />
          
        </div>
      </BrowserRouter>     
    );
  }
}

export default App;
