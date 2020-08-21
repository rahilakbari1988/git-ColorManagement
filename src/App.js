import React from "react";
import FormColorSection from "./sections/formColorSection";
import ColorCardSection from './sections/colorCardSection';
import data from './data.json';
import './App.css';
class App extends React.Component {
    constructor() {
        super();
        this.state={
          data
        }
        this.handler=this.handler.bind(this);
    }
    handler(){
      this.setState(data);
    }
    render() {
        return (
            <div className="App">
                <FormColorSection data={data} handler={this.handler} />
                <ColorCardSection data={data} handler={this.handler} />
            </div>
        );
    }
}

export default App;
