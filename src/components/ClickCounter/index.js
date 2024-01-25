import {Component} from 'react'
import './index.css'


class ClickCounter extends Component{
     state = {count:0}
    onIncrement = () =>{
        this.setState(prevState =>{
            return {count: prevState.count + 1}
        })
    }
   
    render(){
        const {count} = this.state;
        return(
            <div className='container'>
                <h1 class="heading">The button has been clicked <span class="counter"> {count} </span> times</h1>
                <p class="para">Click the button to increase the count!</p>
                <button class="btn" onClick={this.onIncrement}>Click Me</button>
            </div>
        )
    }
}

export default ClickCounter