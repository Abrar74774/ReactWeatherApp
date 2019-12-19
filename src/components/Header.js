import React from 'react';

const headerStyle={
    background:'#2fafff',
    height:'80px',
    width:'100%',
    padding:'20px',
    borderRadius:'12px',
    marginTop:'10px'
}

const header = {
    textAlign:'center',
    margin:'0',
    color:'white',
    fontSize:'46px'
}

export default function Header() {
    return (
        <div style={headerStyle}>
            <h1 style={header}>Weather App</h1>
        </div>        
    )
}