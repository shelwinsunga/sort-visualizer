import React from "react";
import {bubbleSort} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';


//Visualizer Component

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        //array stored in our state

        this.state = {
            array:[],
        };
    }

    //this method will reset the array on first load
    componentDidMount(){ 
        this.resetArray();
    }
 
    resetArray(){
        const array = [];
        //generates a random array with 100 elements
        for(let i = 0; i < 310; i++){
            array.push(randomIntFromIntervals(5,730));
        }
        this.setState({array});
    }

    mergeSort() {}
    quickSort() {}
    heapSort() {}
    bubbleSort() {
        const javaScriptSortedArray = this.state.array
        .slice()
        .sort((a,b) => a-b);
        const sortedArray = bubbleSort(this.state.array);

        

        for(let i = 0; i < 100; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            // arrayBars[i].style.backgroundColor = 'red';
            // arrayBars[i+2].style.backgroundColor = 'red';

        }
    }
 
    render(){
        const {array} = this.state;       
        return ( 
            <div className = "array-container">
            {array.map((value,idx) => (
                <div 
                className = "array-bar" 
                key = {idx}
                style = {{height: `${value}px`}}></div>
            ))}

            {/* creates a button that when clicked, calls the resetArray method.  */}
            <div className = "nav">
            <button onClick={() => this.resetArray()}>Merge Sort</button>
            <button onClick={() => this.resetArray()}>Quick Sort</button>
            <button onClick={() => this.resetArray()}>Heap Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.resetArray()}> Generate New `Array</button>
            </div>
            </div>
        ); 
    }
}

function randomIntFromIntervals(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}