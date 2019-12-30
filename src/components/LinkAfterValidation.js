import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const findBtn = {
    textDecoration:'none',   
    display:'block',
    height:'50px',
    width:'200px',
    padding:'7px',
    textAlign: 'center',
    margin:'80px auto',
    color:'white',
    borderRadius:'5px',
    border:'1px solid #fff',
    transition:'background-color 0.3s'
}

const findBtnNoData ={
    ...findBtn,
    border:'1px solid #ffffff33',
    color:'#ffffff33'
}

export default class LinkAfterValidation extends Component {
    render() {
        if ((this.props.inputfield.city === '') || (this.props.inputfield.x === '') || (this.props.inputfield.y === '')) {
            console.log('Ha');
            return (
                <div style={findBtnNoData}>
                   Find 
                </div>
            )
        } else {
            console.log('na');
            console.log(this.props.inputfield.city);
            return (
                <Link to='/weather' 
                className="findBtn" 
                style={findBtn} 
                onClick={() => {
                    this.props.dataFromSearch({
                        coords:{
                            x:this.props.search.x,
                            y:this.props.search.y},
                        city:this.props.search.city
                    })
                }}
                >
                Find
                </Link>
            )
        }
        
    }
}
