import React,{Component} from 'react';
import './inputColor.css';
export default class InputColor extends Component{
    constructor(){
        super();
    }
    render(){
        const {value} = this.props;
        const {onChange} = this.props;
        return(
            <input
                type="text"
                name="title"
                className="input-text"
                value={value}
                onChange={onChange}
                 />
        )
    }
}