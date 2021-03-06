import React,{Component} from 'react';
import './colorPicker.css'

export default class ColorPicker extends Component{
    constructor(){
        super();
    }
    render(){
        const {value} = this.props;
        const {onChange} = this.props;
        return (
            <input
                type="color"
                name="color"
                onChange={onChange}
                value={value}
                className="colorPicker"
                 />

        )
    }
}