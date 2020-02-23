import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Grid from './components/Grid';

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

    selectBox = (row, col) => {
        let gridCopy = arrayClone(this.state.gridFull);
        gridCopy[row][col] = !gridCopy[row][col];
        this.setState(
            {
                gridFull: gridCopy
            }
        )
    }

    seed = () => {
        console.log("seed")
        let gridCopy = arrayClone(this.state.gridFull);
        for(let i=0; i<this.rows;i++){
            for(let j=0; j<this.cols;j++){
                if(Math.floor(Math.random()*10)===1){
                    gridCopy[i][j]=true;
                }
            }
        }
        this.setState(
            {
                gridFull: gridCopy
            }
        )
    }

    componentDidMount(){
        this.seed();
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
function arrayClone(arr){
        return JSON.parse(JSON.stringify(arr));
}

ReactDOM.render(<Main />, document.getElementById('root'));


