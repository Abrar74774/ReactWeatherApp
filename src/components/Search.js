import React from 'react';
import LinkAfterValidation from './LinkAfterValidation'


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
        fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?text=${inputValue}&f=json&category=City`)
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
        if (this.state.suggs[0]) {
            const searchValue = this.state.suggs[0].text;
        const key = this.state.suggs[0].magicKey;
        fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&SingleLine=${searchValue}&magicKey=${key}`)
            .then(res => res.json())
            .then(data => this.setState(prevstate => ({
                values: {
                    ...prevstate.values,
                    x:data.candidates[0].location.x,
                    y:data.candidates[0].location.y
                }
            })));
        }
        
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
            <div className="searchStyle">
                Enter city name&nbsp;:<br/>
                <input type='text' list="search" id="input" onChange={this.handleChange}/>

                <datalist id="search"></datalist>

                <button className="searchButton" onClick={this.handleClick}>Set Coords</button>

                <div style={{width:'280px',margin:'50px auto',display:'flex',flexDirection:'column',padding:'10px;',textAlign:'justify'}}>
                    <div>
                        Enter&nbsp;longitude&nbsp;:<input type="number" value={this.state.values.x} onChange={this.handleChangeX}/>
                    </div>

                    <div>
                        Enter&nbsp;latitude&nbsp;:<input type="number" value={this.state.values.y} onChange={this.handleChangeY} />
                    </div><br/>
                </div>
              
                <LinkAfterValidation inputfield={this.state.values} search={this.state.values} dataFromSearch={this.props.dataFromSearch}/> 
            </div>
        )
    }
}