import React,{Component} from 'react';
import {Child} from './Child.js';

export  const Ass= class Parent extends Component{
    constructor(){
        super()
        this.state={
            name:"appple",
            show:true
        }

    }
    componentDidMount(){
        console.log("parent mount")
    }
    // componentDidUpdate(){
    //     console.log("parent update")
    // }

    

render(){
    return(
        <div>
            <h1>{this.state.name}</h1>
            <button onClick={()=>this.setState({name:"banana"})}>Click Me</button>

            {this.state.show?<Child/>:""}
            <button onClick={()=>this.setState({show:!this.state.show})}>show/hide</button>
        </div>
    ) 
} 
}
