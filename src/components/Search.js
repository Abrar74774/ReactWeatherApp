import React from 'react';
import LinkAfterValidation from './LinkAfterValidation'

const searchStyle = {
    padding:'50px',
    margin:'50px auto',
    color:'white',
    fontSize:'25px',
    
}



export default class Search extends React.Component {
    state = {
        values: {
            city:'',
            x:'',
            y:''
        },
        suggs:''       
    }    
    
    //Search Recommendation
    handleChange = (e) => {
        const inputValue = e.target.value;    
        fetch(`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?text=${inputValue}&f=json&category=City`)
            .then(res => res.json())
            .then(data => { 
                this.setState(prevState => ({
                    values: {
                        ...prevState.values,
                        city:inputValue
                    },                    
                    suggs:data.suggestions
                }))
            })
    }

    handleClick = () => {
        const searchValue = this.state.suggs[0].text;
        const key = this.state.suggs[0].magicKey;
        fetch(`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&SingleLine=${searchValue}&magicKey=${key}`)
            .then(res => res.json())
            .then(data => this.setState(prevstate => ({
                values: {
                    ...prevstate.values,
                    x:data.candidates[0].location.x,
                    y:data.candidates[0].location.y
                }
            })));
    }
    
    handleChangeX = (e) => {
        const x = e.target.value;
        this.setState({
            values:{
                ...this.state.values,                
                x:x
            }
        })
    }

    handleChangeY = (e) => {
        const y = e.target.value;
        this.setState({
            values:{
                ...this.state.values,                
                y:y
            }
        })
    }
    
    render() {
       
        console.log(this.state);        
        
        return(
            <div style={searchStyle}>
                Enter city name&nbsp;:<br/>
                <input type='text' list="search" id="input" onChange={this.handleChange}/>

                <datalist id="search">
                                       
                </datalist>

                <button onClick={this.handleClick}>Set Coords</button>

                <div style={{width:'90%',margin:'10px auto',display:'flex'}}>
                    <div>
                        <span>Enter longitude&nbsp;:&nbsp;&nbsp;&nbsp; </span><input type="number" value={this.state.values.x} onChange={this.handleChangeX}/>
                    </div>

                    <div>
                        <span>Enter latitude&nbsp;: </span><input type="number" value={this.state.values.y} onChange={this.handleChangeY} />
                    </div><br/>
                </div>
              
                <LinkAfterValidation inputfield={this.state.values} search={this.state.values} dataFromSearch={this.props.dataFromSearch}/> 
            </div>
        )
    }
}