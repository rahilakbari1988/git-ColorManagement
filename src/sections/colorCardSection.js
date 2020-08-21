import React,{Component} from 'react';
import ColorCard from '../components/colorCard';
import './colorCardSection.css';


export default class ColorCardSection extends Component{
    render(){
        const {data, handler} = this.props;
        return(
           
            data.items.map(color =>{
                return(
                    <div className="card-container">
                     <ColorCard color={color} data={data} handler={handler} />
                    </div>
                )
            })
           
        )
     
    }
}