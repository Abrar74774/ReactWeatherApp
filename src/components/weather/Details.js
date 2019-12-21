import React, { Component } from 'react';

export default class Details extends Component {
    render() {
        return (
            <div className='details'>
                <div>
                    <i className='fa fa-wind'></i><br/>
                    {Math.floor(this.props.wind) + ' km/h'}
                </div>
                <div>
                    <i className='fa fa-tint'></i><br/>
                    {this.props.humidity}
                </div>
                <div>
                    <i className='fa fa-sun'></i><br/>
                    {this.props.uvindex}
                </div>
            </div>
        )
    }
}
