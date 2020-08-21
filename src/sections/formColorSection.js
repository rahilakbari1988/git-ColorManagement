import React,{Component} from 'react';
import InputColor from '../components/inputColor';
import ButtonColor from '../components/buttonColor';
import ColorPicker from '../components/colorPicker';
import './formColorSection.css'
export default class FormColorSection extends Component{
    constructor(){
        super();
        this.state={key:0,inputValue:"",colorValue:""};
        this.addColor=this.addColor.bind(this);
        this.handleChangeColor=this.handleChangeColor.bind(this);
        this.handleChangeInput=this.handleChangeInput.bind(this);
    }
    addColor(){
        const {data, handler} =this.props;
        data.items.push({key:this.state.key,
            inputValue:this.state.inputValue,
            colorValue:this.state.colorValue});
        this.state.key++;
        handler(data);
        console.log(data);
    }
    handleChangeInput(e){
        this.setState({inputValue:e.target.value});
    }
    handleChangeColor(e){
        this.setState({colorValue:e.target.value});
    }
    render(){
        return(
            <form className="form">
                <InputColor onChange={this.handleChangeInput} value={this.state.inputValue}  />
                <ColorPicker onChange={this.handleChangeColor} value={this.state.colorValue}   />
                <ButtonColor onClick={this.addColor} />
            </form>
        )
    }
}