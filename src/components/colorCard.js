import React, {Component} from 'react';
import './colorCard.css';
import RatingStar from './RatingStar';
export default class ColorCard extends Component{
    constructor(){
        super();
        this.removeColor = this.removeColor.bind(this);
    }
    removeColor(){
        const {color, data, handler} = this.props;
        delete data.items[color.key];
        handler();
    }
    render(){
        const{color} = this.props;
        return(
            <div className="card">
                <div className="card-header">
                    <h1>{color.inputValue}</h1>
                    <button className="remove-btn" onClick={this.removeColor} >&times;</button>
                </div>

                <div className="card-body" style = {{backgroundColor:color.colorValue}} >
                </div>

                <div className="card-footer">
                    <RatingStar/>
                </div>
            </div>
        )
    }
}