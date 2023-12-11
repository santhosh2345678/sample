import React,{Component} from 'react';

export class Child extends Component{
    constructor(){
        super()
        this.state={
            place:"india",
            count:1
        }
    }
    componentDidMount(){
        // console.log("child mount")
     this.timer=setInterval(()=>{
            this.setState({count:this.state.count+1})
            console.log(this.state.count)
        },2000)
     }

    componentDidUpdate(){
        console.log("child update")
    }

    // shouldComponentUpdate(){
    //     return false
    // }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

render(){
    return(
        <div>
            {this.state.count}
            <button onClick={()=>this.setState({place:"england"})}>Click Me</button>            
        </div>
    )

}
}
