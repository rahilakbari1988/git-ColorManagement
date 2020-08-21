import React,{Component} from 'react';
import './buttonColor.css'
export default class ButtonColor extends Component{
    constructor(){
        super();
    };
    render(){
        const {onClick} = this.props;
        return(
            <button
            className="btn"
             type="button" 
             onClick={onClick}
             >Add</button>
        )
    }
}