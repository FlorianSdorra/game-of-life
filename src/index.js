import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Grid from './components/Grid'

class Main extends React.Component{
    constructor (){
        super();
        this.speed = 100;
        this.rows = 30;
        this.cols =50;

        this.state = {
            generation: 0,
            gridFull: Array(this.rows).fill().map(()=>Array(this.cols).fill(false))
        }
    }


    render() {
        return(
            <div>
                <h1>The Game of Life</h1>
                <Grid 
                    gridFull={this.state.gridFull}
                    rows={this.rows}
                    cols={this.cols}
                    selectBox={this.selectBox}
                />
                <h2>Generations: {this.state.generation}</h2>
            </div>
        )
    }
        
        
    
}

ReactDOM.render(<Main />, document.getElementById('root'));


