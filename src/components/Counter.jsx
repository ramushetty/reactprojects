import React, {Component} from 'react'


class Counter extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
            customIncrement: 1,
            history: [],
            inputFocused: false
        }
    }

    // componentDidMount() {
    //     console.log("mount")

    // }

    // componentDidUpdate() {
    //     console.log("state value changed")
    // }
    // componentWillUnmount() {
    //     console.log("unmount")
    // }

    handleIncrement = () => {
        const {counter, customIncrement} = this.state
        const newCount = counter + customIncrement

        const operation = {
            type: 'Increment',
            value: customIncrement,
            result: newCount,
          };
        this.setState((prevState)=>({
            counter: newCount,
            customIncrement: 1,
            history:[...prevState.history,operation]
        }))
    }
    handleDecrement = () => {
        const {counter, customIncrement} = this.state
        const newCounter = counter-customIncrement
        const operation = {
            type: 'Decrement',
            value: customIncrement,
            result: newCounter,
          };
        this.setState((prevState)=>({
            counter:newCounter,
            history:[...prevState.history,operation],
            customIncrement:1
        }))
    } 

    handleInputChange = (event) => {
        this.setState({customIncrement: parseInt(event.target.value,10)})

    }
    restCounter = () => {
        this.setState((prevState)=>(
            {
                counter:0,
                history:[...prevState.history,this.state.counter].slice(5)
            }))
    }

    handleFocus = (e) => {
        this.setState({inputFocused:true})
    }

    handleBlur = (e) => {
        this.setState({inputFocused:false})
    }


    render() {
        const { inputFocused } = this.state;
        return (
            <div>
                <h1>Counter App</h1>

                <br />
                <br />
                <br />
                <br />
                <br />
                
                <h1>Count: {this.state.counter}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decement</button>
                <button onClick={this.restCounter}>Reset</button>
                <div>
                    <label>Custom Increment/Decrement</label>
                    <input 
                    type="number" 
                    value={this.state.customIncrement} 
                    onChange={this.handleInputChange} 
                    onFocus={this.handleFocus} 
                    onBlur={this.handleBlur}
                    className= {inputFocused ? "focused": ""}
                    />
                </div>

                <ul>
                    {this.state.history.length?
                        this.state.history.map((operation,index)=>{

                          return  ( <li key={index}> {operation.type} by {operation.value}.Result: {operation.result}</li>)
                        } ) : <p>no history</p>
                    }
                </ul>
            </div>
            
        )
    }

}


export default Counter