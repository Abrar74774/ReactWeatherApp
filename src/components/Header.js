import React from 'react';


const header = {
    textAlign:'center',
    margin:'0',
    color:'white',
    fontSize:'46px'
}

export default function Header() {
    return (
        <div className="header-style">
            <h1 style={header}>Weather App</h1>
        </div>        
    )
}